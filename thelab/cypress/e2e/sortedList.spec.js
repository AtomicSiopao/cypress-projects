const sortedList = require("../support/pages/sortedList");
const maxItems = 5;
describe("", () => {
    beforeEach(() => {
        sortedList.visit();
    });

    it("should add item to list if items are less than 5", () => {
        sortedList.checkToDoLength().then((length) => {
            if (length < maxItems) {
                cy.log('Current items: ' + length);
                const item = "New Item " + new Date().getTime();

                sortedList.addItem(item);
                sortedList.checkItemExists(item);
                sortedList.checkToDoLength().then((newLength) => {
                    expect(newLength).to.equal(length + 1);
                    cy.log('New length: ' + newLength);
                });
            } else {
                sortedList.toDoLengthIsFull();
                cy.log('Max items reached: ' + length);
            }
        });
    });

});
