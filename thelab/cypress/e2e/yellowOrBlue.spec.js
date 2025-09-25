const yellowOrBlue = require("../support/pages/yellowOrBlue");

describe("Click the correct color button", () => {
    beforeEach(() => {
        yellowOrBlue.visit();
    });

    it("should click the correct color button 10 times", () => {
        Cypress._.times(10, () => {
            cy.wrap(null).then(() => yellowOrBlue.generateColor());

            cy.get('h5.color')
                .invoke('text')
                .then((colorText) => {
                    const text = colorText.trim().toUpperCase();
                    cy.get(`.${text.toLowerCase()}`).click();
                    cy.get('p[data-testid="message"]').should('have.text', 'Success!');
                });
        });
    });
});
