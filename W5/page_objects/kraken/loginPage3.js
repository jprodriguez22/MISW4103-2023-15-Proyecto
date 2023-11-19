const BasePage = require("./basePage");


class loginPageNew extends BasePage{
    
    async login(email, password){
        let elementEmail = await this.driver.$('#ember8');
        let elementPassword = await this.driver.$('#ember10');
        let loginButton = await this.driver.$('#ember12'); //ESTE ES GHOST 3, RECUERDA CAMBIARLO A GHOST 5 AAA
        await elementEmail.setValue(email);
        await elementPassword.setValue(password);
        await loginButton.click();
    }
}




module.exports = loginPageNew;