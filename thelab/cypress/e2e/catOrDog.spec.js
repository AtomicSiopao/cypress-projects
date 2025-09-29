// cypress/e2e/catOrDog.spec.js
const catOrDogPage = require("../support/pages/catOrDogPage");

describe("Identify the animal by clicking the correct button", () => {
    beforeEach(() => {
        catOrDogPage.visit();
    });

    it.only("should identify the animal and click the corresponding button 10 times", () => {
        Cypress._.times(10, () => {
            catOrDogPage.generateImage();
            catOrDogPage.checkImageAndClick();
        });
    });
});
