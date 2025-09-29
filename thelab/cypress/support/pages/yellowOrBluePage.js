class yellowOrBlue {
    visit() {
        cy.visit('/yellowOrBlue');
    }
    generateColor() {
        cy.contains('h1', 'Yellow or Blue').should('be.visible'); // game name
        cy.get('.form_btn.add').click();
    }

}

module.exports = new yellowOrBlue();