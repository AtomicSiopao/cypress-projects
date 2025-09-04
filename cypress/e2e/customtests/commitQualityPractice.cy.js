describe('General Components Practice', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice');
    });

    it('Click the buttons', () => {
        cy.get('.container-text').contains('General Components').click();
        cy.get('[data-testid="basic-click"]').click();
        cy.contains('.button-container > p','Button clicked').should('be.visible');
        cy.get('[data-testid="double-click"]').dblclick();
        cy.contains('.button-container > p:nth-of-type(2)','Button double clicked').should('be.visible');
        cy.get('[data-testid="right-click"]').rightclick();
        cy.contains('.button-container > p:nth-of-type(3)','Button right mouse clicked').should('be.visible');
    });

    it('Toggle Radio Buttons', () => {
        cy.get('.container-text').contains('General Components').click();
        cy.get('[data-testid="option1"]').click();
        cy.contains('.radio-buttons-container > .component-container > p','option1 clicked').should('be.visible');
        cy.get('[data-testid="option2"]').click();
        cy.contains('.radio-buttons-container > .component-container > p','option2 clicked').should('be.visible');
    });

    it('Select Options from dropdow', () => {
        cy.get('.container-text').contains('General Components').click();
        cy.get('select').select('Option 1').contains('select','Option 1').should('be.visible');
        cy.get('select').select('Option 2').contains('select','Option 2').should('be.visible');
        cy.get('select').select('Option 3').contains('select','Option 3').should('be.visible');

    });
    
});