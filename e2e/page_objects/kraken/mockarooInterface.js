const fetch = require('node-fetch')
// Importación de mockups priori
const prioriUsers = require("../../features/data_generation/priori/ghost_users.json")
const prioriHex = require("../../features/data_generation/priori/random_hex.json")
const prioriPosts = require("../../features/data_generation/priori/ghost_posts.json")
const prioriMembers = require("../../features/data_generation/priori/ghost_members.json")

// Importación de mockups dinámicos
const mockarooSettings = require("../../features/data_generation/dinamico/APIs.json");
const BasePage = require("./basePage");

class MockarooInterface extends BasePage{

    async dynamicInitializeUsers(){
        let jsonArray = await fetch(mockarooSettings.ghost_user);
        let response = await jsonArray.json();
        return await response;
    }

    async dynamicInitializeHex(){
        let jsonArray = await fetch(mockarooSettings.random_hex);
        let response = await jsonArray.json();
        return await response;
    }

    async dynamicInitializePosts(){
        let jsonArray = await fetch(mockarooSettings.ghost_post);
        let response = await jsonArray.json();
        return await response;
    }

    async dynamicInitializeMembers(){
        let jsonArray = await fetch(mockarooSettings.ghost_member);
        let response = await jsonArray.json();
        return await response;
    }

    prioriInitializeUsers(){
        return prioriUsers;
    }

    prioriInitializeHex(){
        return prioriHex;
    }

    prioriInitializePosts(){
        return prioriPosts;
    }

    prioriInitializeMembers(){
        return prioriMembers;
    }

    getRandom(data){
        return data[Math.floor(Math.random()*data.length)];
    }
}

module.exports = MockarooInterface;