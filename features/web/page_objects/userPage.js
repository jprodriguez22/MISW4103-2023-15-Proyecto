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

module.exports = {
    clickThemeButton,
    clickUserButton,
    clickYourProfileButton,
}