const clickThemeButton = async function (driver) {
    let themeButton = await driver.$("div[class$='nightshift-toggle-container']");
    await themeButton.click();
}


const clickUserButton = async function (driver) {
    let userButton = await driver.$("div[class$='gh-user-avatar relative']");
    await userButton.click();
}

const clickYourProfileButton = async function (driver) {
    let yourProfileButton = await driver.$("a[data-test-nav='user-profile']");
    await yourProfileButton.click();
}

//Ghost 3

const clickUserButton3 = async function (driver) {
    let userButton = await driver.$("div[class$='ember-view ember-basic-dropdown-trigger  flex items-center outline-0 pointer space-between pa2 pl4 pr3 mt3 mb6']");
    await userButton.click();
}

const clickYourProfileButton3 = async function (driver) {
    let yourProfileButton = await driver.$("a[href='#/staff/grupo/']");
    await yourProfileButton.click();
}

const clickChangePasswordButton3 = async function (driver) {
    let changePasswordButton3 = await driver.$("button[class$='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']");
    await changePasswordButton3.click();
}
//

const clickPasswordButton = async function (driver) {
    let passwordButton = await driver.$("button[class$='cursor-pointer bg-grey-100 text-black dark:bg-grey-900 dark:text-white hover:!bg-grey-300 dark:hover:!bg-grey-800 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4 ']");
    await passwordButton.click();
}

const clickChangePasswordButton = async function (driver) {
    let changePasswordButton = await driver.$("button[class$='cursor-pointer bg-red text-white hover:bg-red-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4 ']");
    await changePasswordButton.click();
}

const clickSave = async function (driver) {
    let changeSaveButton = await driver.$("button[class$='cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]']");
    await changeSaveButton.click();
}

const clickDone = async function (driver) {
    let changeDoneButton = await driver.$("button[class$='cursor-pointer  text-black hover:text-grey-800 dark:text-white inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-semibold']");
    await changeDoneButton.click();
}

const clickSignOut = async function (driver) {
    let SignOutButton = await driver.$("a[href='#/signout/']");
    await SignOutButton.click();
}

module.exports = {
    clickThemeButton,
    clickUserButton,
    clickYourProfileButton,
    clickUserButton3,
    clickYourProfileButton3,
    clickPasswordButton,
    clickChangePasswordButton,
    clickSave,
    clickDone,
    clickSignOut,
    clickChangePasswordButton3,
}