// Importación de Cucumber
const { Given, When, Then } = require("@cucumber/cucumber");

// Importación de configuraciones
const configs = require("../../../properties.json");

// Importación de módulos
const HomePage = require("../../../page_objects/kraken/homePage");
const PagesPage = require("../../../page_objects/kraken/pagesPage");
const SettingsPage = require("../../../page_objects/kraken/settingsPage")
const MockarooInterface = require("../../../page_objects/kraken/mockarooInterface");

// Aquí se declaran los Given para la importación de datos a priori y dinámicos. Estos siempre se deben llamar en el Given 
// Declara el uso de variables globales para poder garantizar que la información es constante en toda la prueba
Given("I load a dynamic dataset", async function(){ // Este es un llamado para el mock de user dinámico, es decir, con un GET por medio de un API HTTP
  globalThis.mockUser = new MockarooInterface(this.driver)
  globalThis.mockHex = new MockarooInterface(this.driver)
  globalThis.userData = await globalThis.mockUser.dynamicInitializeUsers();
  globalThis.hexData = await globalThis.mockHex.dynamicInitializeHex();
  globalThis.user1 = globalThis.mockUser.getRandom(globalThis.userData);
  globalThis.hex1 = globalThis.mockHex.getRandom(globalThis.hexData);
})

// Acá se deben construir los pasos para la inyección aleatoria de datos
When("I create a new page with dynamic random bio and name", async function(){
  pagesPageObject = new PagesPage(this.driver);
  let title = globalThis.user1.biography;
  let body = `${globalThis.user1.first_name}   -   -    -   -  - ${globalThis.user1.last_name}`;
  return await pagesPageObject.prepareNewPage(title, body);
  }
);
When("I create a new page with dynamic random naughty string and bio", async function(){
  pagesPageObject = new PagesPage(this.driver);
  let title = globalThis.hex1.naughty;
  let body = globalThis.user1.biography;
  return await pagesPageObject.prepareNewPage(title, body);
  }
);
Then("I navigate to the page with dynamic random name", async function(){
  pagesPageObject = new PagesPage(this.driver);
  return await pagesPageObject.visitAfterPublish();
});
Then("I add the dynamic page to the website navigation", async function (){
  settingsPageObject = new SettingsPage(this.driver);
  return await settingsPageObject.addNewPage(globalThis.hex1.naughty.replace(/[@. ]/g, '-'));
});

Then("I click on the navbar page with dynamic name", async function (){
  homePageObject = new HomePage(this.driver);
  return await homePageObject.selectNavPage(globalThis.hex1.naughty.replace(/[@. ]/g, '-'));
});
