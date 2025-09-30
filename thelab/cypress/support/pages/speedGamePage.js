class SpeedGamePage {
    // Setter . Locators
    get header() {
        return cy.contains('h1', 'Speed Game');
    }

    get startGameButton() {
        return cy.get('button[data-testid="startBtn"]');
    }
    get endGameButton() {
        return cy.get('.form_btn.delete', { timeout: 15000 });
    }

    get successMessage() {
        return cy.get('[data-testid="message"]');
    }

    get score() {
        return cy.get('.sub_message');
    }

    // Actions
    visit() {
        cy.visit('/speedGame');
        this.header.should('be.visible');
        return this;
    }

    clickStartGameButton() {
        this.startGameButton.click();
        return this;
    }

    clickEndGameButton() {
        this.endGameButton.click();
        return this;
    }

    checkSuccessMessage() {
        this.successMessage.should('be.visible');
        return this;
    }

    checkScore() {
        this.score.should('contain.text', 'Your reaction time is');
        return this;
    }

}
module.exports = new SpeedGamePage();