// Importación de Cucumber
const { Given, When, Then } = require("@cucumber/cucumber");

// Importación de configuraciones
const configs = require("../../../properties.json");

// Importación de módulos
const HomePage = require("../../../page_objects/kraken/homePage");
const LoginPage = require("../../../page_objects/kraken/loginPage");
const PagesPage = require("../../../page_objects/kraken/pagesPage");
const SettingsPage = require("../../../page_objects/kraken/settingsPage");
const PostsPage = require("../../../page_objects/kraken/postsPage");
const UsersPage = require("../../../page_objects/kraken/usersPage");
const changePasswordPage = require("../../../page_objects/kraken/changePasswordPage");
const MembersPage = require("../../../page_objects/kraken/membersPage");
const TagsPage = require("../../../page_objects/kraken/tagsPage");
const MockarooInterface = require("../../../page_objects/kraken/mockarooInterface");

// Aquí se declaran los Given para la importación de datos a priori y dinámicos. Estos siempre se deben llamar en el Given
// Declara el uso de variables globales para poder garantizar que la información es constante en toda la prueba
Given("I load a priori dataset", function () {
  // Este es un llamado para el mock de user a priori
  globalThis.mockUser = new MockarooInterface(this.driver);
  globalThis.userData = globalThis.mockUser.prioriInitializeUsers();
  globalThis.user1 = globalThis.mockUser.getRandom(globalThis.userData); // De esta manera el usuario se mantiene consistente en todas las pruebas
  globalThis.user2 = globalThis.mockUser.getRandom(globalThis.userData); // Se pueden agregar la cantidad de usuarios globales que se requieran para una prueba
  globalThis.mockHex = new MockarooInterface(this.driver);
  globalThis.hexData = globalThis.mockHex.prioriInitializeHex();
  globalThis.hex1 = globalThis.mockHex.getRandom(globalThis.hexData);
  while(globalThis.hex1 === 'NULL' || globalThis.hex1 === ''){
    globalThis.hex1 = globalThis.mockHex.getRandom(globalThis.hexData) 
  }
});

Given("I load a post with priori dataset", function () {
  globalThis.mockUser = new MockarooInterface(this.driver);
  globalThis.userData = globalThis.mockUser.prioriInitializeUsers();
  globalThis.user1 = globalThis.mockUser.getRandom(globalThis.userData);
  globalThis.mockPost = new MockarooInterface(this.driver);
  globalThis.postData = globalThis.mockPost.prioriInitializePosts();
  globalThis.post = globalThis.mockPost.getRandom(globalThis.postData);
});

Given("I load a member with priori dataset", function () {
  globalThis.mockUser = new MockarooInterface(this.driver);
  globalThis.userData = globalThis.mockUser.prioriInitializeUsers();
  globalThis.user1 = globalThis.mockUser.getRandom(globalThis.userData);
  globalThis.mockMember = new MockarooInterface(this.driver);
  globalThis.memberData = globalThis.mockMember.prioriInitializeMembers();
  globalThis.member = globalThis.mockMember.getRandom(globalThis.memberData);
});

Given("I load a tag with priori dataset", function () {
  globalThis.mockMember = new MockarooInterface(this.driver);
  globalThis.tagData = globalThis.mockTag.prioriInitializeTags();
  globalThis.tag= globalThis.mockTag.getRandom(globalThis.tagData);
});


// Acá se deben construir los pasos para la inyección aleatoria de datos

// Funciones Given
Given(
  "I login into the page with priori random user and email",
  async function () {
    loginPageObject = new LoginPage(this.driver);
    let userEmail = globalThis.user1.email;
    let userPassword = globalThis.user1.password;
    return await loginPageObject.login(userEmail, userPassword);
  }
);

// Funciones When
When("I create a post with priori random title and body", async function () {
  postsPageObject = new PostsPage(this.driver);
  const title = globalThis.post.title;
  const body = globalThis.post.body;
  return await postsPageObject.prepareNewPost(title, body);
});

When("I select a post with priori random name", async function () {
  postsPageObject = new PostsPage(this.driver);
  const name = globalThis.post.title.replace(" ", "-");
  return await postsPageObject.selectCurrentPost(name);
});

When(
  "I modify data the a post created with priori random title2 and body2",
  async function () {
    postsPageObject = new PostsPage(this.driver);
    const title = globalThis.post.title + "-modify";
    const body = globalThis.post.body + "-modify";
    return await postsPageObject.prepareEditPost(title, body);
  }
);

When(
  "I modify data from the post with priori random title",
  async function () {
    postsPageObject = new PostsPage(this.driver);
    const title = globalThis.post.title + "-modify";
    return await postsPageObject.EditDraftPost(title);
  }
);

When(
  "I update the post modified with priori random title2",
  async function () {
    postsPageObject = new PostsPage(this.driver);
    return await postsPageObject.updatePost();
  }
);

When(
  "I create a member with priori random name and email",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const name = globalThis.member.name;
    const email = globalThis.member.email;
    return await membersPageObject.prepareNewMember(name, email);
  }
);

When(
  "I create a member with priori random name",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const name = globalThis.member.name;
    return await membersPageObject.createMember(name);
  }
);

When(
  "I create a member with priori random email",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const email = globalThis.member.email;
    return await membersPageObject.emailMember(email);
  }
);

When(
  "I create a member with priori random tag",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const tag = globalThis.member.name;
    return await membersPageObject.createMember(tag);
  }
);

When("I create a new page with priori random name and bio", async function () {
  pagesPageObject = new PagesPage(this.driver);
  let title = `${globalThis.user2.first_name} ${globalThis.user2.last_name}`;
  let body = globalThis.user2.biography;
  return await pagesPageObject.prepareNewPage(title, body);
});

When("I create a new page with priori random email and bio", async function () {
  pagesPageObject = new PagesPage(this.driver);
  let title = globalThis.user2.email;
  let body = globalThis.user2.biography;
  return await pagesPageObject.prepareNewPage(title, body);
});

When("I create a new page with priori random naughty string and bio", async function (){
  pagesPageObject = new PagesPage(this.driver);
  let title = globalThis.hex1.naughty;
  let body = globalThis.user2.biography;
  return await pagesPageObject.prepareNewPage(title, body);
});

When("I add a random priori email to the page title", async function (){
  settingsPageObject = new SettingsPage(this.driver);
  let title = globalThis.user2.email;
  return await settingsPageObject.addNewTitle(title);
});

When("I create a new random priori naughty string announcement", async function (){
  let title = globalThis.hex1.naughty
  return await settingsPageObject.newAnnouncement(title);
});

When(
  "I create a new tag with priori random name ",
  async function () {
    tagsPageObject = new TagsPage(this.driver);
    const name = globalThis.tag.tag;
    return await tagsPageObject.insertName(name);
  }
);

When(
  "I modify a created tag with priori random name",
  async function () {
    tagsPageObject = new TagsPage(this.driver);
    const name = globalThis.tag.tag + "-modify";
    return await tagsPageObject.modifyName(name);
  }
);

When(
  "I edit a member with priori random name in email",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const name = globalThis.member.name;
    return await membersPageObject.editMemberEmail(name);
  }
);

When(
  "I edit a member with priori random bio as name",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    const bio = globalThis.user1.biography;
    return await membersPageObject.editMemberName(bio);
  }
);

When(
  "I delete a member with priori random bio as name",
  async function () {
    membersPageObject = new MembersPage(this.driver);
    return await membersPageObject.deleteMemberId();
  }
);

When("I create a new descriptive note with priori random info", async function(){
  membersPageObject = new MembersPage(this.driver);
  let note = globalThis.member.name;
  return await membersPageObject.addDescriptiveNote(note);
  }
);


When(
  "I change the bio with priori random password",
  async function () {
    userPageObject = new UsersPage(this.driver);
    const password = globalThis.user1.password;
    return await userPageObject.changeBio(password);
  }
);

When(
  "I change my current password {kraken-string} with priori random passwords",
  async function (currentPassword) {
    changePasswordPageObject = new changePasswordPage(this.driver);
    const password1 = globalThis.user1.password;
    const password2 = globalThis.user1.email;
    return await changePasswordPageObject.changePasswordDynamic(currentPassword, password1, password2);
  }
);

Then("I navigate to the page with priori random name", async function(){
  pagesPageObject = new PagesPage(this.driver);
  return await pagesPageObject.visitAfterPublish();
});

Then("I add the priori page to the website navigation", async function () {
  settingsPageObject = new SettingsPage(this.driver);
  return await settingsPageObject.addNewPage(
    globalThis.user2.email.replace(/[@. ]/g, "-"));
});

Then("I click on the navbar page with priori name", async function () {
  homePageObject = new HomePage(this.driver);
  return await homePageObject.selectNavPage(
    globalThis.user2.email.replace(/[@. ]/g, "-"));
});

Then("I delete the page with priori random naughty string", async function (){
  return await pagesPageObject.deletePage(globalThis.hex1.naughty.replace(/\s+$/, ''))
});

Then("Then I navigate to the member with the priori random note", async function(){
  membersPageObject = new MembersPage(this.driver);
  return await membersPageObject.validateNote();
});

Then("Then I apply the filters to see the modified tag with the priori random name", async function(){
  postsPageObject = new PostsPage(this.driver);
  return await postsPageObject.filterAllTags();
});