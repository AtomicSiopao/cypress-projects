const catOrDog = require("../support/pages/catOrDog");

describe("Identify the animal by clicking the correct button", () => {
    beforeEach(() => {
        catOrDog.visit();
    });

    it("should click the correct animal button 10 times", () => {
        Cypress._.times(10, () => {
            catOrDog.generateImage();
            catOrDog.checkImageAltText()
        });
    });
});
