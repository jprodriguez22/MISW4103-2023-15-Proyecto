// Importación de Cucumber
const { Given, When, Then } = require("@cucumber/cucumber");

// Importación de configuraciones
const configs = require("../../../properties.json");

// Importación de archivos step
require('./steps_aleatorios')
require('./steps_priori')
require('./steps_dinamico')
require('./stepsG4')