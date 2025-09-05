describe('Accordions Practice with Popup', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice');
        cy.closeRandomPopup(); // check + close random popup if it appears
    });

    it('Verify Accorion 2 elements - buttons', () => {
        cy.get('.container-text').contains('Popups').click(); // first accordion
        cy.contains('Random Popup').should('be.visible');
        cy.closeRandomPopup();
        cy.get('[data-testid="accordion-1"]:nth-of-type(1)').click();
        cy.get('[data-testid="basic-click"]').click();
        cy.contains('.button-container > p','Button clicked').should('be.visible');
        cy.get('[data-testid="double-click"]').dblclick();
        cy.contains('.button-container > p:nth-of-type(2)','Button double clicked').should('be.visible');
        cy.get('[data-testid="right-click"]').rightclick();
        cy.contains('.button-container > p:nth-of-type(3)','Button right mouse clicked').should('be.visible');
        cy.get('[data-testid="accordion-1"]:nth-of-type(1)').click();
    });
/*
    it('Verify Accordion 2 elements - radio buttons', () => { // second accordion
        cy.get('.container-text').contains('Popups').click();
        cy.get('[data-testid="accordion-1"]:nth-of-type(2)').click();
        cy.get('[value="option1"]').click();
        cy.contains('.component-container > p','option1 clicked').should('be.visible');
        cy.get('[value="option2"]').click();
        cy.contains('.component-container > p','option2 clicked').should('be.visible');
        cy.get('[data-testid="accordion-1"]:nth-of-type(2)').click();
    });

    it('Verify Accorion 3 elements - checkboxes', () => {
        cy.get('.container-text').contains('Popups').click();
        cy.get('[data-testid="accordion-1"]:nth-of-type(3)').click();
        cy.get('[data-testid="checkbox1"]').click();
        cy.contains('.container > :nth-child(1) > :nth-child(5) > :nth-child(1) > p', 'Checkbox 1 checked').should('be.visible');
        cy.get('[data-testid="checkbox2"]').click();
        cy.contains('.container > :nth-child(1) > :nth-child(5) > :nth-child(2) > p', 'Checkbox 2 checked').should('be.visible');
        cy.get('[data-testid="checkbox3"]').click();
        cy.contains('.container > :nth-child(1) > :nth-child(5) > :nth-child(3) > p', 'Checkbox 3 checked').should('be.visible');
        cy.get('[data-testid="accordion-1"]:nth-of-type(3)').click();
    });
*/    
});