// cypress/support/pages/BasketPage.js
class BasketPage {
    visit() {
        // go directly to the basket route (optional)
        cy.visit('/basket');
    }

    // quick assertion that the basket page contains expected product & price
    basketShouldContain(productName, price) {
        cy.contains('Your Basket').should('be.visible'); // page header
        cy.contains(productName).should('be.visible');
        cy.contains(price).should('be.visible');
    }
    checkoutButton() {
        return cy.contains('button', 'Continue to checkout');
    }

    goToCheckout() {
        this.checkoutButton().click();
    }
}

module.exports = new BasketPage();
