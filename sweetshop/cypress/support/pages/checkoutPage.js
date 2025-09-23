// cypress/support/pages/CheckoutPage.js
class CheckoutPage {
    // Form fields

    inputField(selector, value) {
        return cy.get(selector).type(value);
    }

    selectField(selector, value) {
        return cy.get(selector).select(value);
    }

    placeOrderButton() {
        return cy.contains('button', 'Continue to checkout');
    }

    // Actions
    fillForm(userData, creditCardData) {
        this.inputField(':nth-child(1) > #name', userData.firstName);
        this.inputField(':nth-child(2) > #name', userData.lastName);
        this.inputField('input[id="email"]', userData.email);
        this.inputField('input[id="address"]', userData.address);
        this.inputField('input[id="address2"]', userData.address2);
        this.selectField('select[id="country"]', userData.country);
        this.selectField('select[id="city"]', userData.city);
        this.inputField('input[id="zip"]', userData.zip);
        this.inputField('input[id="cc-name"]', creditCardData.ccName);
        this.inputField('input[id="cc-number"]', creditCardData.ccNumber);
        this.inputField('input[id="cc-expiration"]', creditCardData.ccExpiry);
        this.inputField('input[id="cc-cvv"]', creditCardData.ccCVV);
    }

    submitOrder() {
        this.placeOrderButton().click();
    }

    // Assertions
    orderConfirmationShouldBeVisible() {
        cy.contains('Thank you for your order').should('be.visible');
    }
}
module.exports = new CheckoutPage();
