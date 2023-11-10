const BasePage = require("./basePage");

class loginPage extends BasePage{
    
    async login(email, password){
        let elementEmail = await this.driver.$('#identification');
        let elementPassword = await this.driver.$('#password');
        let loginButton = await this.driver.$('#ember5');
        await elementEmail.setValue(email);
        await elementPassword.setValue(password);
        await loginButton.click();
    }
}

module.exports = loginPage;