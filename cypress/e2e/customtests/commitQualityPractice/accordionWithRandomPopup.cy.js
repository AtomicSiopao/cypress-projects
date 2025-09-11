describe('Accordions Practice with Popup', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice');
        //cy.closeRandomPopup(); // check + close random popup if it appears
    });

    it('Verify Accordion 1 elements - buttons', () => {
        cy.get('.container-text').contains('Popups').click(); // first accordion
        cy.get('[data-testid="accordion-1"]:nth-of-type(1)').click();
        cy.get('[data-testid="basic-click"]').click();
        cy.wait(1500);
        cy.closeRandomPopup();
        cy.contains('.button-container > p', 'Button clicked')
            .should('be.visible');
        cy.get('[data-testid="double-click"]').dblclick();
        cy.wait(1500);
        cy.closeRandomPopup();
        cy.contains('.button-container > p:nth-of-type(2)', 'Button double clicked')
            .should('be.visible');
        cy.get('[data-testid="right-click"]').rightclick();
        cy.wait(1500);
        cy.closeRandomPopup();
        cy.contains('.button-container > p:nth-of-type(3)', 'Button right mouse clicked')
          .should('be.visible');
        cy.get('[data-testid="accordion-1"]:nth-of-type(1)').click();
    });
        it('Verify Accordion 2 elements - radio buttons', () => { // second accordion
            cy.get('.container-text').contains('Popups').click();
            cy.get('[data-testid="accordion-2"]').click();
            cy.get('[data-testid="option1"]').click();
            cy.closeRandomPopup();
            cy.contains('.component-container > p','option1 clicked').should('be.visible');
            cy.get('[data-testid="option2"]').click();
            cy.closeRandomPopup();
            cy.contains('.component-container > p','option2 clicked').should('be.visible');
            cy.get('[data-testid="accordion-2"]').click();
        });
    
        it('Verify Accordion 3 elements - checkboxes', () => {
            cy.get('.container-text').contains('Popups').click();
            cy.get('[data-testid="accordion-3"]').click();
            cy.get('[data-testid="checkbox1"]').click();
            cy.closeRandomPopup();
            cy.contains('.container > :nth-child(1) > :nth-child(5) > :nth-child(1) > p', 'Checkbox 1 checked').should('be.visible');
            cy.get('[data-testid="checkbox2"]').click();
            cy.closeRandomPopup();
            cy.contains('.container > :nth-child(1) > :nth-child(5) > :nth-child(2) > p', 'Checkbox 2 checked').should('be.visible');
            cy.get('[data-testid="checkbox3"]').click();
            cy.closeRandomPopup();
            cy.contains('.container > :nth-child(1) > :nth-child(5) > :nth-child(3) > p', 'Checkbox 3 checked').should('be.visible');
            cy.get('[data-testid="accordion-3"]').click();
        });
});