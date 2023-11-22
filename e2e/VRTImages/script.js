const resemble = require('resemblejs');
const fs = require('fs');
const path = require('path');

// Directorios de las imágenes de referencia y las imágenes de prueba
const referenceDir = path.join(__dirname, 'Ghost3');
const testDir = path.join(__dirname, 'Ghost5');

const reportDir = path.join(__dirname, '..', 'reports');
const vrtReportsDir = path.join(reportDir, 'VRT-ReportsHTML');

// Verificar si la carpeta "reports" existe
if (!fs.existsSync(reportDir)) {
  console.error('La carpeta "reports" no existe. Por favor, crea la carpeta manualmente o ajusta la ruta.');
  process.exit(1); // Salir del script con código de error
}

// Escenarios de prueba
const scenarios = ['ID01', 'ID02', 'ID03', 'ID12', 'ID13']; // Ajusta según tus escenarios

// Versiones que estás comparando
const versions = ['Ghost3', 'Ghost5'];

// Ejecutar las comparaciones para cada escenario y versión
scenarios.forEach((scenario) => {
  compareImages(scenario, versions);
});

// Comparar imágenes con Resemble y generar informes HTML
function compareImages(scenario, versions) {
  versions.forEach((version) => {
    const stepsData = [];

    let step = 0;
    while (true) {
      const referenceImage = path.join(referenceDir, `${scenario} - ${step}.png`);
      const testImage = path.join(testDir, `${scenario} - ${step}.png`);

      if (fs.existsSync(referenceImage) && fs.existsSync(testImage)) {
        const diff = resemble(referenceImage)
          .compareTo(testImage)
          .ignoreAntialiasing()
          .onComplete((data) => {
            const diffImage = path.join(reportDir, `${version}_${scenario}_${step}_diff.png`);
            fs.writeFileSync(diffImage, data.getBuffer());
            console.log(`[resemble.js] ${version} - ${scenario}-${step}: ${data.misMatchPercentage}% mismatch`);
            stepsData.push({
              diffImage,
              mismatchPercentage: data.misMatchPercentage,
              referenceImage,
              testImage,
            });

            // Si es el último paso, generar el informe HTML
            if (!fs.existsSync(path.join(referenceDir, `${scenario} - ${step + 1}.png`))) {
              generateHtmlReport(scenario, version, stepsData);
            }
          });
        step++;
      } else {
        // No hay más pasos, salir del bucle
        break;
      }
    }
  });
}

// Generar informe HTML
function generateHtmlReport(scenario, version, stepsData) {
  const reportHtml = path.join(reportDir, `${version}_${scenario}_report.html`);

  const htmlContent = `
    <html>
      <head>
        <title>Visual Regression Report - ${version} - ${scenario}</title>
      </head>
      <body>
        <h2>${version} - ${scenario}</h2>
        ${stepsData.map((stepData, index) => `
          <p>Step ${index + 1} - Mismatch Percentage with Resemble: ${stepData.mismatchPercentage}%</p>
          <p>Ghost3:</p>
          <img src="${stepData.referenceImage}" alt="Reference Image"/>
          <p>Ghost5:</p>
          <img src="${stepData.testImage}" alt="Test Image"/>
          <p>Resemble:</p>
          <img src="${stepData.diffImage}" alt="Difference Image - resemble.js"/>
        `).join('')}
      </body>
    </html>
  `;

  fs.writeFileSync(reportHtml, htmlContent);
}
