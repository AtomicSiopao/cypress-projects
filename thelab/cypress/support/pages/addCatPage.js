class addCatPage {
    //Locators
    get header() {
        return cy.contains('h1', 'Add cat').should('be.visible');
    }

    get catName() {
        return cy.get('input[name="name"]');
    }

    get catDescription() {
        return cy.get('.description > [name="description"]');
    }

    get catPreference() {
        return cy.get('input[type="radio"][name="inOrOutside"]');
    }

    get addCatButton() {
        return cy.get('.text-center > .form_btn');
    }

    get cancelButton() {
        return cy.get('.form_btn.cancel');
    }

    // Actions
    setCatName(name) {
        this.catName.clear().type(name);
    }

    setCatDescription(description) {
        this.catDescription.clear().type(description);
    }

    setCatPreference(preference) {
        this.catPreference.filter(`[value="${preference}"]`).check();
    }

    submitCatForm() {
        this.addCatButton.click();
    }

    fillCatForm(name, description, preference) {
        this.setCatName(name);
        this.setCatDescription(description);
        this.setCatPreference(preference);
    }

    createCat(name, description, preference) {
        this.fillCatForm(name, description, preference);
        this.submitCatForm();
    }

    cancelCatForm() {
        this.cancelButton.click();
    }
}

module.exports = new addCatPage();