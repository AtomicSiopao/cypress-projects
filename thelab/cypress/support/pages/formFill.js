class formFill {
    visit() {
        cy.visit('/formFill');
        cy.contains('h1', 'Form Fill').should('be.visible');
    }

    fillForm(firstname, lastname, email, password) {
        cy.get('input[name="firstname"]').type(firstname);
        cy.get('input[name="lastname"]').type(lastname);
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
    }

    saveToDB() {
        cy.get('.btn_section > .form_btn').click();
        cy.contains('.save_message', 'Data saved to DB').should('be.visible');
    }

    checkErrorMessage() { // cypress cannot check HTML5 validation pop-up
        cy.get('.btn_section > .form_btn').click();
        cy.contains('.error', 'Please enter a valid email address.').should('be.visible');
        cy.get('input[name="email"]').then(($el) => {
            expect($el[0].checkValidity()).to.be.false;
            cy.log($el[0].validationMessage); 
            expect($el[0].validationMessage).to.contain('@');
        });
    }
}

module.exports = new formFill();