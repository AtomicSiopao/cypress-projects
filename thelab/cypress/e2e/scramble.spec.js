import scramble from "../support/pages/scramble";
describe("Scramble the items and identify the correct attributes", () => {
    beforeEach(() => {
        scramble.visit();
    });

    it("should swap IDs", () => {
        scramble.clickSwapID();
    });

    it("should swap Classes", () => {
        scramble.clickSwapClass();
    });

    it("should swap Contents", () => {
        scramble.clickSwapContent();
    });

    it("should randomize the position", () => {
        scramble.clickRandomPosition();
    });

    it("should swap DOM Order", () => {
        scramble.clickSwapDOMOrder();
    });

});