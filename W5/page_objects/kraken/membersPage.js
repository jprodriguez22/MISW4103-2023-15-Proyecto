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

    //Prueba 21 Ghost 3
    async addDescriptiveBio(bio) {

        let bioField = await this.driver.$('textarea[class$="ember-text-area gh-input ember-view"]');
        await bioField.setValue(bio);
    }

    async saveBio() {
        let saveBio = await this.driver.$('[id="ember68"]');
        await saveBio.click();
    }
    //Ghost 5
    async addDescriptiveBio5(bio) {

        let bioField = await this.driver.$('textarea[class$="order-2 rounded-md border bg-grey-150 px-3 py-2 transition-all dark:bg-grey-900 dark:text-white border-transparent placeholder:text-grey-500 hover:bg-grey-100 focus:border-green focus:bg-white focus:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:placeholder:text-grey-800 dark:hover:bg-grey-925 dark:focus:bg-grey-925 mt-1.5 resize-none "]');
        await bioField.setValue(bio);
    }

    async saveBio5() {
        let saveBio = await this.driver.$('button[class$="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold  h-[34px] px-4  min-w-[80px]"]');
        await saveBio.click();
    }
    
    //

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


    async createMember(nombre) {
        let newMemberButton = await this.driver.$('[data-test-new-member-button="true"]');
        await newMemberButton.click();
        let nameField = await this.driver.$('[data-test-input="member-name"]');
        await nameField.setValue(nombre);
    }

    async emailMember(correo) {
        let emailField = await this.driver.$('[data-test-input="member-email"]');
        await emailField.setValue(correo);
    }

    async tagMember(tag) {
        let inputField = await this.driver.$('.ember-power-select-trigger-multiple-input');
        await inputField.setValue(tag);
        let addButton = await this.driver.$('.ember-power-select-option[data-option-index="0"]');
        await addButton.click();
    }
    

    async saveMember() {
        let saveButton = await this.driver.$('[data-test-button="save"]');
        await saveButton.click();
    }

    async filterMembers(){
        let filterbutton = await this.driver.$('[data-test-button="members-filter-actions"]')
        await filterbutton.click()
        let display = await this.driver.$('[data-test-select="members-filter"]')
        await this.driver.pause(1000);
        await display.click()
        let optionElement = await this.driver.$('select[data-test-select="members-filter"] option[value="label"]');
        await optionElement.click();  
        await this.driver.pause(1000);
        let inputElement = await this.driver.$('input.ember-power-select-trigger-multiple-input');
        await inputElement.click();
        await this.driver.pause(1000);
        let listItem = await this.driver.$('ul.ember-power-select-options li[data-option-index="0"]');
        let buttonElement = await listItem.$('button[data-test-edit-label]');
        await buttonElement.click();
        let filterButton = await this.driver.$('[data-test-button="members-apply-filter"]')
        await this.driver.pause(2000);
    }

    async navigateToTabMembers() {
        let button = await this.driver.$('[data-test-nav="members"]');
        await button.click();
      }
    
      async prepareNewMember(name, email) {
        let newMemberButton = await this.driver.$('[data-test-new-member-button="true"]');
        await newMemberButton.click();
        let nameField = await this.driver.$('[data-test-input="member-name"]');
        await nameField.setValue(name);
        let emailField = await this.driver.$('[data-test-input="member-email"]');    
        await emailField.setValue(email);
        let saveButton = await this.driver.$('[data-test-button="save"]');
        await saveButton.click();
      }
}

module.exports = MembersPage;
