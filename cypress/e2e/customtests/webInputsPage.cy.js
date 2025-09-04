context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com');
        cy.get('.container-fluid > .row > .col-12').invoke('remove');
    })

    it('Web Inputs Navigation and Interaction', () => {
        cy.contains('a', 'Web inputs').click(); // other locator does not work, find a workaround
        cy.url().should('include', '/inputs');
        const inputNumber = "123456789";
        const inputText = "abcdefg...uvwxyz";
        const inputPassword = "thisisAPassword1234";
        const inputDate = "2025-09-04";
        cy.get('[name="input-number"]').click().type(`${inputNumber}`);
        cy.get('[name="input-text"]').click().type(`${inputText}`);
        cy.get('[name="input-password"]').click().type(`${inputPassword}`)
          .should('have.attr', 'type', 'password');
        cy.get('[name="input-date"]').click().type(`${inputDate}`);
        cy.get('#btn-display-inputs').click();
        cy.contains('#output-number', `${inputNumber}`);
        cy.contains('#output-text', `${inputText}`);
        cy.contains('#output-password', `${inputPassword}`);
        cy.contains('#output-date', `${inputDate}`);
        cy.get('#btn-clear-inputs').click();
    });
})