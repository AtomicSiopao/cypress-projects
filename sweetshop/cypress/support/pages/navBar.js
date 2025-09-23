// cypress/support/page_objects/NavBar.js
class NavBar {
  // find the basket link (matches "0 Basket", "1 Basket", etc.)
  basketLink() {
    // search in the whole page for the anchor that contains "<num> Basket"
    return cy.contains(/\d+\s+Basket/);
  }

  goToBasket() {
    this.basketLink().click();
  }
}

module.exports = new NavBar();
