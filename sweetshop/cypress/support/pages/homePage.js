// cypress/support/page_objects/HomePage.js
class HomePage {
  visit() {
    cy.visit('/');
  }

  // returns the h4 element for the product title
  findProductHeader(productName) {
    return cy.contains('h4', productName);
  }

  // assert the product exists and has the expected price (price is a string like '£1.00')
  productShouldHavePrice(productName, price) {
    this.findProductHeader(productName)
      .should('exist')
      .parent()
      .within(() => {
        cy.contains(price).should('be.visible');
      });
  }

  // click the Add to Basket for a given product (works whether it's a button, link or text)
  addToBasket(productName) {
    this.findProductHeader(productName)
      .parents('.card')
      .within(() => {
        cy.contains('Add to Basket').click();
      });
  }
}

module.exports = new HomePage();
