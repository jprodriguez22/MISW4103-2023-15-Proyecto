const BasePage = require("./basePage");

class changePasswordPage extends BasePage {
    async changePassword(password, newPassword) {
        let elementPassword = await this.driver.$('[id=":r15:"]');
        await elementPassword.waitForExist({ timeout: 5000 });
        await elementPassword.waitForDisplayed();
        await elementPassword.setValue(password);

        let elementNewPassword = await this.driver.$('[id=":r16:"]');
        await elementNewPassword.waitForExist({ timeout: 5000 });
        await elementNewPassword.waitForDisplayed();
        await elementNewPassword.setValue(newPassword);

        let elementVerifyPassword = await this.driver.$('[id=":r17:"]');
        await elementVerifyPassword.waitForExist({ timeout: 5000 });
        await elementVerifyPassword.waitForDisplayed();
        await elementVerifyPassword.setValue(newPassword);
    }
}

module.exports = changePasswordPage;