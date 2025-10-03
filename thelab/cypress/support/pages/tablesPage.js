class tablesPage {
    // Getter . Locator
    get header() {
        return cy.contains('h1', 'Tables');
    }
    // Dynamic Locator
    getFilter(animal) {
        return cy.get(`input[type="checkbox"][name="${animal}"`);
    }


    visit() {
        cy.visit('/tables');
        this.header.should('be.visible');
    }

    toggleFilter(animal, check = true) {
        const action = check ? 'check' : 'uncheck';

        this.getFilter(animal)[action]({ force: true });

        cy.get(`input[type="checkbox"][name="${animal}"]`)
            .siblings('.checkmark')
            .invoke('attr', 'aria-checked')
            .should('eq', check ? 'true' : 'false');
    }

    checkFilter(animal) {
        this.toggleFilter(animal, true);
    }

    uncheckFilter(animal) {
        this.toggleFilter(animal, false);
    }
}

module.exports = new tablesPage();