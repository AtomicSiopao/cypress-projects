class YellowOrBluePage {
    // Getters / Locators
    get header() {
        return cy.contains('h1', 'Yellow or Blue');
    }

    get generateColorButton() {
        return cy.get('.form_btn.add');
    }

    get colorLabel() {
        return cy.get('h5.color');
    }

    get yellowButton() {
        return cy.get('.yellow');
    }

    get blueButton() {
        return cy.get('.blue');
    }

    get successMessage() {
        return cy.get('p[data-testid="message"]');
    }

    // Actions
    visit() {
        cy.visit('/yellowOrBlue');
        this.header.should('be.visible');
    }

    generateColor() {
        this.generateColorButton.click();
    }

    chooseColor() {
        this.colorLabel.invoke('text').then((colorText) => {
            const text = colorText.trim().toUpperCase();
            if (text === "YELLOW") {
                this.yellowButton.click();
            } else if (text === "BLUE") {
                this.blueButton.click();
            } else {
                throw new Error(`Unexpected color: ${text}`);
            }
        });
    }

    verifySuccess() {
        this.successMessage.should('be.visible').and('contain.text', 'Success');
    }
}

module.exports = new YellowOrBluePage();
