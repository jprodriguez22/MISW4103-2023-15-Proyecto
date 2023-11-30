const BasePage = require("./basePage");

class loginPageGhost3 extends BasePage{
    
    async login(email, password){
        let elementEmail = await this.driver.$('[name="identification"]');
        let elementPassword = await this.driver.$('[name="password"]');
        let loginButton = await this.driver.$('.login');
        await elementEmail.setValue(email);
        await elementPassword.setValue(password);
        await loginButton.click();
    }
}

module.exports = loginPageGhost3;