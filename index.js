const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { options } = config;
const GhostBefore = config.pathBefore;
const GhostAfter = config.pathAfter;
const Compare = config.pathCompare;

async function executeTest() {
  const resultado = {};
  const arregloVersiones = [
    obtenerArchivos(GhostBefore),
    obtenerArchivos(GhostAfter),
  ];

  const datos = await Promise.all(arregloVersiones);
  const archivosGhostBefore = datos[0];
  const archivosGhostAfter = datos[1];

  for (let i = 0; i < archivosGhostBefore.length; i++) {
    try {
      const nombreArchivo = archivosGhostBefore[i];
      if (archivosGhostBefore[i] !== archivosGhostAfter[i]) {
        console.error(
          `El nombre del archivo ${archivosGhostBefore[i]}, no existe en una de las versiones de Ghost`
        );
        continue;
      }

      let resultInfo = {};
      const data = await compareImages(
        `${GhostBefore}/${nombreArchivo}`,
        `${GhostAfter}/${nombreArchivo}`,
        options
      );

      resultInfo[nombreArchivo] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };

      fs.writeFileSync(`${Compare}/${nombreArchivo}`, data.getBuffer());

      // Logs
      console.log(`${GhostBefore}/${nombreArchivo}`);
      console.log(`${GhostAfter}/${nombreArchivo}`);
      console.log(`${Compare}/${nombreArchivo}`);
      console.log("*******************************");
      resultado[nombreArchivo] = resultInfo;
    } catch (error) {
      console.error("Fallo en la comparacion de imagenes:", error);
    }
  }

  return resultado;
}

function obtenerArchivos(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, archivos) => {
      if (error) reject(error);
      else resolve(archivos);
    });
  });
}

(async () => console.log(await executeTest()))();
