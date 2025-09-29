class catShelter {

    const cat =
    {
        name: "Jarpild",
        description: "Calico",
        preference: "inside" // inside or outside
    }

    visit() {
        cy.visit('/catshelter');
        cy.contains('h1', 'Cat shelter').should('be.visible');
    }

    addCat(name, description, preference) {
        cy.get('.cat_shelter_header > .link_btn').click();
        cy.url().should('include', '/addcat');
        cy.get('input[name="name"]').type(name);
        cy.get('.description > [name="description"]').type(description);
        cy.get('input[type="radio"][name="inOrOutside"]').check(preference);
        cy.get('.text-center > .form_btn').click();
    }

    searchCat(name) {
        cy.get('.collection', { timeout: 5000 }).should('be.visible');
        cy.get('.collection').contains('li > .cat_name_link > span', name);
    }

    removeCat(name) {
        cy.get('.collection')
            .contains('li > .cat_name_link > span', name)
            .click();
        cy.url().should('include', '/cats/');
        cy.get('.single_cat_form_header > .form_btn').click();
        cy.url().should('include', '/catshelter');
    }
}

module.exports = new catShelter();