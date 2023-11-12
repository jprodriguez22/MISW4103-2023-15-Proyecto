const BasePage = require("./basePage");

class MembersPage extends BasePage {

    async navigateToMembers(){
        let button = await this.driver.$('[data-test-nav="members"]')
        await button.click()
    }

    async selectMember() {

        let memberButton = await this.driver.$('[data-test-list="members-list-item"]');
        await memberButton.click();
    }

    async addDescriptiveNote(note) {

        let noteField = await this.driver.$('[data-test-input="member-note"]');
        await noteField.setValue(note);
        await noteField.keys('Enter')
    }

    async addDescriptiveName(note) {

        let nameField = await this.driver.$('[data-test-input="member-name"]');
        await nameField.setValue(note);
    }
    

    async changeEmail(mail) {

        let mailField = await this.driver.$('[data-test-input="member-email"]');
        await mailField.setValue(mail);
    }

    async saveNote() {

        let saveButton = await this.driver.$('[data-test-button="save"]');
        await saveButton.click();
    }

    async validateNote() {

        await this.navigateToMembers();
        await this.selectMember();
    }

    async clickSettings() {

        let settingsButton = await this.driver.$('[data-test-button="member-actions"]');
        await settingsButton.click();
    }

    async delete() {

        let deleteButton = await this.driver.$('[data-test-button="delete-member"]');
        await deleteButton.click();
    }
    
    async confirm() {

        let confirmButton = await this.driver.$('[data-test-button="confirm"]');
        await confirmButton.click();
    }
}

module.exports = MembersPage;
