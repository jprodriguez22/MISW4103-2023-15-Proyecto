const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { options } = config;
const GhostBefore = config.pathBefore;
const GhostAfter = config.pathAfter;
const Compare = config.pathCompare;

async function executeTest() {
  const resultado = {};
  const arregloEscenarios = [
    obtenerEscenarios(GhostBefore),
    obtenerEscenarios(GhostAfter),
  ];

  const datos = await Promise.all(arregloEscenarios);
  const escenariosGhostBefore = datos[0];
  const escenariosGhostAfter = datos[1];

  for (let i = 0; i < 10; i++) {
    try {
      const escenario = escenariosGhostBefore[i];

      if (escenariosGhostBefore[i] !== escenariosGhostAfter[i]) {
        console.error(
          `El nombre del escenario ${escenario}, no existe en una de las versiones de Ghost`
        );
        continue;
      }

      let resultInfo = {};
      for (paso of escenariosGhostBefore) {
        const data = await compareImages(
          `${GhostBefore}/${escenario}/${paso}`,
          `${GhostAfter}/${escenario}/${paso}`,
          options
        );

        resultInfo[paso] = {
          isSameDimensions: data.isSameDimensions,
          dimensionDifference: data.dimensionDifference,
          rawMisMatchPercentage: data.rawMisMatchPercentage,
          misMatchPercentage: data.misMatchPercentage,
          diffBounds: data.diffBounds,
          analysisTime: data.analysisTime,
        };

        fs.writeFileSync(`${Compare}/${escenario}/${paso}`, data.getBuffer());

        // Logs
        console.log(`${GhostBefore}/${escenario}/${paso}`);
        console.log(`${GhostAfter}/${escenario}/${paso}`);
        console.log(`${Compare}/${escenario}/${paso}`);
        console.log("*******************************");
      }
      resultado[escenario] = resultInfo;
    } catch (error) {
      console.error("Fallo en la comparacion de imagenes:", error);
    }
  }

  return resultado;
}

function obtenerEscenarios(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, archivos) => {
      if (error) reject(error);
      else resolve(archivos);
    });
  });
}

(async () => console.log(await executeTest()))();
