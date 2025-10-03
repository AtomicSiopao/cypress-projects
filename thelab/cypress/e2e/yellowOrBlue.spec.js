const yellowOrBlue = require("../support/pages/yellowOrBluePage");

describe("Yellow or Blue Game", () => {
    beforeEach(() => {
        yellowOrBlue.visit();
    });

    it("should generate a color and click the correct button", () => {
        yellowOrBlue.generateColor();
        yellowOrBlue.chooseColor();
        yellowOrBlue.verifySuccess();
    });
});
