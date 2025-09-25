class catOrDog {
    visit() {
        cy.visit('/catOrDog');
    }
    generateImage() {
        cy.contains('h1', 'Cat or Dog').should('be.visible'); // game name
        cy.get('.form_btn.add').click();
    }
    checkImageAltText() {
        cy.get('.image > img').invoke('attr', 'alt')
            .then((altText) => {
                cy.log(`Image alt text: ${altText}`);
                if (altText.includes("cat")) {
                    cy.get('button.pink_dark').click();
                } else if (altText.includes("dog")) {
                    cy.get('button.turqoise').click();
                }
            });
    }
}

module.exports = new catOrDog();