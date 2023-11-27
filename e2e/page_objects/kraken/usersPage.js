const BasePage = require("./basePage");

class UsersPage extends BasePage {

    async navigateMyProfile(){
        let userButton = await this.driver.$("div[class$='gh-user-avatar relative']");
        await userButton.click();
        let yourProfileButton = await this.driver.$("a[data-test-nav='user-profile']");
        await yourProfileButton.click();
        let passwordButton = await this.driver.$("button[class$='cursor-pointer bg-grey-100 text-black dark:bg-grey-900 dark:text-white hover:!bg-grey-300 dark:hover:!bg-grey-800 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4 ']");
        await passwordButton.click();
    }
    async changeBio(bio){
        let bioField = await this.driver.$('textarea[class$="order-2 rounded-md border bg-grey-150 px-3 py-2 transition-all dark:bg-grey-900 dark:text-white border-transparent placeholder:text-grey-500 hover:bg-grey-100 focus:border-green focus:bg-white focus:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:placeholder:text-grey-800 dark:hover:bg-grey-925 dark:focus:bg-grey-925 mt-1.5 resize-none "]');
        await bioField.setValue(bio);
        let saveBio = await this.driver.$('button[class$="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]"]');
        await saveBio.click();
    }

    async clickThemeButton() {
        let themeButton = await this.driver.$("div[class$='nightshift-toggle-container']");
        await themeButton.click();
    }

    async clickUserButton() {
        let userButton = await this.driver.$("div[class$='gh-user-avatar relative']");
        await userButton.click();
    }

    async clickYourProfileButton() {
        let yourProfileButton = await this.driver.$("a[data-test-nav='user-profile']");
        await yourProfileButton.click();
    }

    // Ghost 3
    async clickUserButton3() {
        let userButton = await this.driver.$("div[class$='ember-view ember-basic-dropdown-trigger  flex items-center outline-0 pointer space-between pa2 pl4 pr3 mt3 mb6']");
        await userButton.click();
    }

    async clickYourProfileButton3() {
        let yourProfileButton = await this.driver.$("a[href='#/staff/grupo/']");
        await yourProfileButton.click();
    }

    async clickChangePasswordButton3() {
        let changePasswordButton3 = await this.driver.$("button[class$='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']");
        await changePasswordButton3.click();
    }
    //

    async clickPasswordButton() {
        let passwordButton = await this.driver.$("button[class$='cursor-pointer bg-grey-100 text-black dark:bg-grey-900 dark:text-white hover:!bg-grey-300 dark:hover:!bg-grey-800 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4 ']");
        await passwordButton.click();
    }

    async clickChangePasswordButton() {
        let changePasswordButton = await this.driver.$("button[class$='cursor-pointer bg-red text-white hover:bg-red-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4 ']");
        await changePasswordButton.click();
    }

    async clickSave() {
        let changeSaveButton = await this.driver.$("button[class$='cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]']");
        await changeSaveButton.click();
    }

    async clickDone() {
        let changeDoneButton = await this.driver.$("button[class$='cursor-pointer  text-black hover:text-grey-800 dark:text-white inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-semibold']");
        await changeDoneButton.click();
    }

    async clickSignOut() {
        let SignOutButton = await this.driver.$("a[href='#/signout/']");
        await SignOutButton.click();
    }
}

module.exports = UsersPage;
