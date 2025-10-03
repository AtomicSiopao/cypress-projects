class scramblePage {
    // Getters / Locators
    get header() {
        return cy.contains('h1', 'Scramble Items');
    }

    get buttonOne() {
        return cy.get('button[name="btnOne"]');
    }

    get buttonTwo() {
        return cy.get('button[name="btnTwo"]');
    }

    // Controls that trigger different scramble behaviors
    get swapIDButton() {
        return cy.get('button.form_btn.add').eq(0);
    }

    get swapClassButton() {
        return cy.get('button.form_btn.add').eq(1);
    }

    get swapContentButton() {
        return cy.get('button.form_btn.add').eq(2);
    }

    get randomPositionButton() {
        return cy.get('button.form_btn.add').eq(3);
    }

    get swapDOMOrderButton() {
        return cy.get('button.form_btn.add').eq(4);
    }

    // Actions / Methods

    visit() {
        cy.visit('/scramble');  // or whatever the relative path is
        this.header.should('be.visible');
    }

    clickSwapID() {
        this.swapIDButton.click();
    }

    clickSwapClass() {
        this.swapClassButton.click();
    }

    clickSwapContent() {
        this.swapContentButton.click();
    }

    clickRandomPosition() {
        this.randomPositionButton.click();
    }

    clickSwapDOMOrder() {
        this.swapDOMOrderButton.click();
    }

    clickCorrectButton(correctName) {
        cy.get(`button[name="${correctName}"]`).click();
    }
}

module.exports = new scramblePage();
