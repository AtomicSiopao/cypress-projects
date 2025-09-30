class formFillPage {
    // Setters . Locators
    get header() {
        return cy.contains('h1', 'Form Fill').should('be.visible');
    }

    get firstName() {
        return cy.get('input[name="firstname"]');
    }

    get lastName() {
        return cy.get('input[name="lastname"]');
    }

    get email() {
        return cy.get('input[name="email"]');
    }

    get password() {
        return cy.get('input[name="password"]');
    }

    get saveToDBButton() {
        return cy.get('.btn_section > .form_btn');
    }

    get dataSavedToDBMessage() {
        return cy.contains('.save_message', 'Data saved to DB');
    }

    get usersInDBButton(){
        return cy.get('button.form_btn.orange')
    }

    // Setters
    setfirstName(firstName) {
        this.firstName.clear().type(firstName);
    }
    setlastName(lastName) {
        this.lastName.clear().type(lastName);
    }
    setEmail(email) {
        this.email.clear().type(email);
    }
    setPassword(password) {
        this.password.clear().type(password);
    }

    setUserToCheck(firstName, lastName){
        return cy.contains('td', `${firstName} ${lastName}`);
    }

    // Actions
    visit() {
        cy.visit('/formFill');
    }

    fillUserForm(firstName, lastName, email, password) {
        this.setfirstName(firstName);
        this.setlastName(lastName);
        this.setEmail(email);
        this.setPassword(password);
    }

    submitUserForm() {
        this.saveToDBButton.click();
    }

    saveUserToDB(firstName, lastName, email, password) {
        this.fillUserForm(firstName, lastName, email, password);
        this.submitUserForm();
        this.dataSavedToDBMessage.should('be.visible');
    }

    clickUserInDBButton(){
        this.usersInDBButton.click();
    }

    checkIfUserIsInDB(firstName, lastName){
        this.clickUserInDBButton();
        this.setUserToCheck(firstName, lastName).should('be.visible');
    }

    // checkErrorMessage() { // cypress cannot check HTML5 validation pop-up
    //     cy.get('.btn_section > .form_btn').click();
    //     cy.contains('.error', 'Please enter a valid email address.').should('be.visible');
    //     cy.get('input[name="email"]').then(($el) => {
    //         expect($el[0].checkValidity()).to.be.false;
    //         cy.log($el[0].validationMessage);
    //         expect($el[0].validationMessage).to.contain('@');
    //     });
    // }
}

module.exports = new formFillPage();