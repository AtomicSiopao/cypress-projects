class WaitGamePage {
    // Locators
    get header() {
        return cy.contains('h1', "Wait Game");
    }

    get startGameButton() {
        return cy.get('button[data-testid="startBtn"]');
    }

    get endGameButton() {
        return cy.get('.form_btn.delete');
    }

    get successMessage() {
        return cy.get('[data-testid="message"]');
    }

    // Actions
    visit() {
        cy.visit('/waitGame');
        this.header.should('be.visible');
    }

    startGame() {
        this.startGameButton.click();
        cy.wait(5000); // minimum wait duration
    }

    endGame() {
        this.endGameButton.click();
        this.successMessage.should('be.visible').and('contain.text', 'Success');
    }
}

module.exports = new WaitGamePage();