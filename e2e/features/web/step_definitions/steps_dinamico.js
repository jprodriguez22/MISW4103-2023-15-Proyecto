// Importación de Cucumber
const { Given, When, Then } = require("@cucumber/cucumber");

// Importación de configuraciones
const configs = require("../../../properties.json");

// Importación de archivos step
require('./steps_aleatorios')

// Importación de módulos
const LoginPage = require("../../../page_objects/kraken/loginPage");
const PagesPage = require("../../../page_objects/kraken/pagesPage");
const MockarooInterface = require("../../../page_objects/kraken/mockarooInterface");

// Aquí se declaran los Given para la importación de datos a priori y dinámicos. Estos siempre se deben llamar en el Given 
// Declara el uso de variables globales para poder garantizar que la información es constante en toda la prueba
Given("I load a dynamic user dataset", function(){ // Este es un llamado para el mock de user dinámico, es decir, con un GET por medio de un API HTTP
  globalThis.mockUser = new MockarooInterface(this.driver)
  globalThis.userData = globalThis.mockUser.dynamicInitializeUsers();
  globalThis.user1 = globalThis.mockUser.getRandomUser(globalThis.userData);
})
Given("I load a dynamic hex dataset", function(){ // Este es un llamado para el mock de colores hexadecimales dinámico
  globalThis.mockHex = new MockarooInterface(this.driver)
  globalThis.hexData = globalThis.mockHex.dynamicInitializeUsers();
  globalThis.hex1 = globalThis.mockHex.getRandomUser(globalThis.hexData);
})

// Acá se deben construir los pasos para la inyección aleatoria de datos
Given("I login into the page with a random user and email", async function(){
  loginPageObject = new LoginPage(this.driver);
  let userEmail = globalThis.user1.email;
  let userPassword = globalThis.user1.password;
  return await loginPageObject.login(userEmail, userPassword)
})

When(
  "I create a new page with random title and body", async function(){
    pagesPageObject = new PagesPage(this.driver);
    let userEmail = globalThis.user1.email;
    let userBio = globalThis.user1.biography;
    return await pagesPageObject.prepareNewPage(userEmail, userBio);
  }
);
