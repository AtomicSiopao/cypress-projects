import { customerData } from "../utils/testData";
describe('Purchase Sweets from Sweet Shop', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    it('should display the Navigation Bar', () => {
        cy.get('.navbar-nav > [href="/sweets"]').click(); // go to Sweets Page
        cy.url().should('include', '/sweets');
        cy.document().then((doc) => {
            const buttonsInPage = doc.querySelectorAll('.card > .card-footer > .btn').length;
            let displayRows = buttonsInPage / 4;
            let itemsInBasket = 0;
            for (let x = 2; x <= displayRows + 1; x++) { // displayRows + 1 since selector always starts with 2 for some reason
                for (let y = 1; y <= 4; y++) { // column
                    cy.get(`:nth-child(${x}) > :nth-child(${y}) > .card > .card-footer > .btn`).click();
                    itemsInBasket++;
                    cy.log(`${itemsInBasket} items added in basket.`);
                };
            };
            cy.contains('.badge', `${itemsInBasket}`).click(); // checks if `Add to Basket` buttons clicked match the number of items in Basket
        });

        customerData.forEach(data => {
            const { selector, value } = data;
            if (data.type === 'select') {
                cy.get(selector).select(value);
            } else {
                cy.get(selector).type(value);
            };
        });

    });

});