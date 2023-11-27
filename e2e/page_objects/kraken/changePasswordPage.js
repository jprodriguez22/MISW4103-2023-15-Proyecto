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

    async changePasswordDynamic(password, newPassword, verifyPassword) {
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
        await elementVerifyPassword.setValue(verifyPassword);

        let changePasswordButton = await this.driver.$("button[class$='cursor-pointer bg-red text-white hover:bg-red-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4 ']");
        await changePasswordButton.click();
    }
}

module.exports = changePasswordPage;