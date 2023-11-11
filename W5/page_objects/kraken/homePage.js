const BasePage = require("./basePage");

class homePage extends BasePage{

    async selectNavPage(name){
        await this.driver.$('.nav-'+name.toLowerCase()).click()
    }
}
module.exports = homePage;