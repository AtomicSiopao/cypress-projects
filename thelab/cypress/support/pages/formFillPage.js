class formFillPage {
    // Setters . Locators
    get header() {
        return cy.contains('h1', 'Form Fill');
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

    get usersInDBButton() {
        return cy.get('button.form_btn.orange')
    }

    // Setters
    setFirstName(firstName) {
        this.firstName.clear().type(firstName);
        return this;
    }

    setLastName(lastName) {
        this.lastName.clear().type(lastName);
        return this;
    }

    setEmail(email) {
        this.email.clear().type(email);
        return this;
    }

    setPassword(password) {
        this.password.clear().type(password);
        return this;
    }

    setUserToCheck(firstName, lastName) {
        return cy.contains('td', `${firstName} ${lastName}`);
    }

    // Actions
    visit() {
        cy.visit('/formFill');
        this.header.should('be.visible');
    }

    fillUserForm(firstName, lastName, email, password) {
        this.setFirstName(firstName)
            .setLastName(lastName)
            .setEmail(email)
            .setPassword(password);
        return this;
    }

    submitUserForm() {
        this.saveToDBButton.click();
        return this;
    }

    saveUserToDB(firstName, lastName, email, password) {
        this.fillUserForm(firstName, lastName, email, password)
            .submitUserForm();
        this.dataSavedToDBMessage.should('be.visible');
        return this;
    }

    clickUserInDBButton() {
        this.usersInDBButton.click();
        return this;
    }

    checkIfUserIsInDB(firstName, lastName) {
        this.setUserToCheck(firstName, lastName).should('be.visible');
        return this;
    }
}
module.exports = new formFillPage();