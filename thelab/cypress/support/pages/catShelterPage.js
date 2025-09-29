class catShelterPage {
    //Locators
    get header() {
        return cy.contains('h1', 'Cat shelter');
    }

    get addCatButton() {
        return cy.get('.cat_shelter_header > .link_btn');
    }

    get catCollection() {
        return cy.get('.collection', { timeout: 8000 });
    }

    get deleteCatButton() {
        return cy.get('.single_cat_form_header > .form_btn');
    }

    //Setters

    // Actions
    visit() {
        cy.visit('/catshelter');
    }

    verifyOnCatDetailsPage() {
        return cy.url().should('include', '/cats/');
    }

    catNameInCollection(name) {
        return cy.get('.collection').contains('li > .cat_name_link > span', name);
    }

    clickAddCat() {
        this.addCatButton.click()
    }

    searchCat(name) {
        this.catCollection.should('be.visible');
        return this.catNameInCollection(name);
    }

    openCatDetails(name) {
        this.catNameInCollection(name).click();
        this.verifyOnCatDetailsPage();
    }

    deleteCat() {
        this.deleteCatButton.click();
        this.header.should('be.visible');
        cy.url().should('include', '/catshelter'); // extra safeguard
        return this;
    }

    removeCat(name) {
        this.openCatDetails(name);
        this.deleteCat();
    }
}

module.exports = new catShelterPage();