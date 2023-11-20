const BasePage = require("./basePage");

class changePasswordPage3 extends BasePage {
    async changePassword(password, newPassword) {
        let elementPassword = await this.driver.$("input[autocomplete$='current-password']");
        await elementPassword.waitForExist({ timeout: 5000 });
        await elementPassword.waitForDisplayed();
        await elementPassword.setValue(password);

        let elementNewPassword = await this.driver.$("input[id$='user-password-new']");
        await elementNewPassword.waitForExist({ timeout: 5000 });
        await elementNewPassword.waitForDisplayed();
        await elementNewPassword.setValue(newPassword);

        let elementVerifyPassword = await this.driver.$("input[id$='user-new-password-verification']");
        await elementVerifyPassword.waitForExist({ timeout: 5000 });
        await elementVerifyPassword.waitForDisplayed();
        await elementVerifyPassword.setValue(newPassword);
    }
}

module.exports = changePasswordPage3;