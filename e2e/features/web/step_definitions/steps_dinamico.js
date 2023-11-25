// Importación de Cucumber
const { Given, When, Then } = require("@cucumber/cucumber");

// Importación de configuraciones
const configs = require("../../../properties.json");

// Importación de módulos
const HomePage = require("../../../page_objects/kraken/homePage");
const PagesPage = require("../../../page_objects/kraken/pagesPage");
const SettingsPage = require("../../../page_objects/kraken/settingsPage");
const PostsPage = require("../../../page_objects/kraken/postsPage");
const MembersPage = require("../../../page_objects/kraken/membersPage");
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
  while(globalThis.hex1 === 'NULL'){
    globalThis.hex1 = globalThis.mockHex.getRandom(globalThis.hexData) 
  }
});

Given("I load a post with dynamic dataset", function () {
  globalThis.mockPost = new MockarooInterface(this.driver);
  globalThis.postData = globalThis.mockPost.dynamicInitializePosts();
  globalThis.post = globalThis.mockPost.getRandom(globalThis.postData);
});

Given("I load a member with dynamic dataset", function () {
  globalThis.mockMember = new MockarooInterface(this.driver);
  globalThis.memberData = globalThis.mockMember.dynamicInitializeMembers();
  globalThis.member = globalThis.mockMember.getRandom(globalThis.memberData);
});

// Acá se deben construir los pasos para la inyección aleatoria de datos
When("I create a post with dynamic random title and body", async function () {
  postsPageObject = new PostsPage(this.driver);
  const title = globalThis.post.title;
  const body = globalThis.post.body;
  return await postsPageObject.prepareNewPost(title, body);
});

When("I select a post with dynamic random name", async function () {
  postsPageObject = new PostsPage(this.driver);
  const name = globalThis.post.title.replace(" ", "-");
  return await postsPageObject.selectCurrentPost(name);
});

When(
  "I modify data the a post created with dynamic random title2 and body2",
  async function () {
    postsPageObject = new PostsPage(this.driver);
    const title = globalThis.post.title + "-modify";
    const body = globalThis.post.body + "-modify";
    return await postsPageObject.prepareEditPost(title, body);
  }
);

When(
  "I update the post modified with dynamic random title2",
  async function () {
    postsPageObject = new PostsPage(this.driver);
    return await postsPageObject.updatePost();
  }
);

When(
  "I create a member with dynamic random name and email",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const name = globalThis.member.name;
    const email = globalThis.member.email;
    return await membersPageObject.prepareNewMember(name, email);
  }
);

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

When("I add a random dynamic full name to the page title", async function (){
  settingsPageObject = new SettingsPage(this.driver);
  let title = globalThis.user1.first_name + " " + globalThis.user1.last_name;
  return await settingsPageObject.addNewTitle(title);
});

When("I create a new random dynamic bio announcement", async function (){
  let title = globalThis.user1.biography
  return await settingsPageObject.newAnnouncement(title);
});

Then("I navigate to the post with dynamic random name", async function () {
  const name = globalThis.post.title.replace(" ", "-");
  return await this.driver.url(
    "http://" + configs.BASEURL + ":" + configs.G5PORT + "/" + name
  );
});-

Then(
  "I delete the post created with dynamic random title",
  async function (name) {
    postsPageObject = new PostsPage(this.driver);
    name = globalThis.post.title.replace(" ", "-");
    return await postsPageObject.deletePost(name);
  });

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

Then("I delete the page with dynamic random naughty string", async function (){
  return await pagesPageObject.deletePage(globalThis.hex1.naughty.replace(/\s+$/, ''))
});