/// <reference types="cypress" />
const home = require('../support/pages/homePage');
const nav = require('../support/pages/navBar');
const basket = require('../support/pages/basketPage');

describe('Home -> Add to basket -> Basket page', () => {
  beforeEach(() => {
    home.visit();
  });

  it('adds "Bon Bons" to the basket and verifies it shows in the basket', () => {
    const product = 'Bon Bons';
    const price = '£1.00';

    // sanity: home page header is present
    cy.contains('Welcome to the sweet shop!').should('be.visible');

    // product exists and has the right price
    home.productShouldHavePrice(product, price);

    // add it to the basket
    home.addToBasket(product);

    // wait/assert the nav updates to "1 Basket"
    // (Cypress automatically retries; adjust timeout if your network is slow)
    nav.basketLink().should('contain.text', '1 Basket');

    // go to the basket page and assert item is present
    nav.goToBasket();
    basket.basketShouldContain(product, price);
  });
});
