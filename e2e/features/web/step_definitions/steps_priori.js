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
Given("I load a priori user dataset", function(){ // Este es un llamado para el mock de user a priori 
  globalThis.mockUser = new MockarooInterface(this.driver)
  globalThis.userData = globalThis.mockUser.prioriInitializeUsers()
  globalThis.user1 = globalThis.mockUser.getRandomUser(globalThis.userData); // De esta manera el usuario se mantiene consistente en todas las pruebas
  console.log(user1)
  globalThis.user2 = globalThis.mockUser.getRandomUser(globalThis.userData); // Se pueden agregar la cantidad de usuarios globales que se requieran para una prueba
  console.log(user2)  
})
Given("I load a priori hex dataset", function(){ // Este es un llamado para el mock de colores hexadecimales a priori 
  globalThis.mockHex = new MockarooInterface(this.driver)
  globalThis.hexData = globalThis.mockHex.prioriInitializeHexColor();
  globalThis.hex1 = globalThis.mockHex.getRandomUser(globalThis.hexData);
})

// Acá se deben construir los pasos para la inyección aleatoria de datos

// Funciones Given
Given("I login into the page with priori random user and email", async function(){
  loginPageObject = new LoginPage(this.driver);
  let userEmail = globalThis.user1.email;
  let userPassword = globalThis.user1.password;
  return await loginPageObject.login(userEmail, userPassword)
});

// Funciones When
When("I create a new page with priori random name and bio", async function(){
  pagesPageObject = new PagesPage(this.driver);
  let userName = `${globalThis.user2.first_name} ${globalThis.user2.last_name}`;
  let userBio = globalThis.user2.biography;
  return await pagesPageObject.prepareNewPage(userName, userBio);
});

Then("I navigate to the page with priori random name", async function () {
  return await this.driver.url("http://" + configs.BASEURL + ":" + configs.G5PORT + "/" + `${globalThis.user2.first_name}-${globalThis.user2.last_name}`);
});
