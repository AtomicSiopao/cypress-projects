class tables {

    visit() {
        cy.visit('/tables');
        cy.contains('h1', 'Tables').should('be.visible');
    }

    uncheckFilter(animal) {
        cy.get(`input[type="checkbox"][name="${animal}"]`).uncheck({ force: true });
        cy.get(`input[type="checkbox"][name="${animal}"]`).siblings('.checkmark').invoke('attr', 'aria-checked').should('eq', 'false');
    }

    checkFilter(animal) {
        cy.get(`input[type="checkbox"][name="${animal}"]`).check({ force: true });
        cy.get(`input[type="checkbox"][name="${animal}"]`).siblings('.checkmark').invoke('attr', 'aria-checked').should('eq', 'true');
    }


    checkFilterState(animal, expectedState) {
        cy.get(`input[type="checkbox"][name="${animal}"]`)
            .parent()
            .find('.checkmark') // adjust if structure is different
            .invoke('attr', 'aria-checked')
            .should('eq', expectedState);
    }
}

module.exports = new tables();