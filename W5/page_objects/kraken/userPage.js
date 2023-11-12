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
    clickPasswordButton,
    clickChangePasswordButton,
    clickSave,
    clickDone,
    clickSignOut,
}