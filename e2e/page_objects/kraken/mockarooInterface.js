// Importación de mockups priori
const prioriUsers = require("../../features/data_generation/priori/ghost_users.json")
const prioriHexColors = require("../../features/data_generation/priori/random_hex.json")

// Importación de mockups dinámicos
const mockarooSettings = require("../../features/data_generation/dinamico/APIs.json");
const BasePage = require("./basePage");

class MockarooInterface extends BasePage{

    async dynamicInitializeUsers(){
        const jsonArray = await fetch(mockarooSettings.ghost_user);
        const response = await jsonArray.json();
        return await response;
    }

    async dynamicInitializeHexColors(){
        const jsonArray = await fetch(mockarooSettings.random_hex);
        const response = await jsonArray.json();
        return await response;
    }

    prioriInitializeUsers(){
        return prioriUsers;
    }

    prioriInitializeHexColor(){
        return prioriHexColors;
    }

    getRandomUser(data){
        return data[Math.floor(Math.random()*data.length)];
    }
}

module.exports = MockarooInterface;