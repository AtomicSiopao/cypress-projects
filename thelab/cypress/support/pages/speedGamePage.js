class SpeedGame {
    visit() {
        cy.visit('/speedGame');
    }

    startGame() {
        cy.contains('h1', 'Speed Game').should('be.visible'); // game name
        cy.get('button[data-testid="startBtn"]').click();
    }
    endGame() {
        cy.get('.form_btn.delete', { timeout: 15000 }).should('be.visible').click();
    }
}
module.exports = new SpeedGame();