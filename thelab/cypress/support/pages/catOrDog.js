// cypress/pages/CatOrDogPage.js

class CatOrDogPage {
    // Locators
    get header() {
        return cy.contains('h1', 'Cat or Dog');
    }

    get generateButton() {
        return cy.get('.form_btn.add');
    }

    get image() {
        return cy.get('.image > img');
    }

    get catButton() {
        return cy.get('button.pink_dark');
    }

    get dogButton() {
        return cy.get('button.turqoise');
    }

    // Actions
    visit() {
        cy.visit('/catOrDog');
    }

    generateImage() {
        this.header.should('be.visible');
        this.generateButton.click();
    }

    clickCat() {
        this.catButton.click();
    }

    clickDog() {
        this.dogButton.click();
    }

    // Utility
    checkImageAndClick() {
        this.image.invoke('attr', 'alt').then((altText) => {
            cy.log(`Image alt text: ${altText}`);
            if (altText.includes("cat")) {
                this.clickCat();
            } else if (altText.includes("dog")) {
                this.clickDog();
            }
        });
    }
}

module.exports = new CatOrDogPage();