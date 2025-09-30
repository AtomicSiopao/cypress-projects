const sortedList = require("../support/pages/sortedListPage");
const maxItems = 5;
describe("", () => {
    beforeEach(() => {
        sortedList.visit();
    });

    // it("should add an item to the todo list", () => {
    //     sortedList.addToDo(item);
    //     sortedList.checkNewToDo(item);
    // });

    it("should add item to list until max is reached", () => {
        sortedList.getToDoLength().then((length) => {
            const item = Date.now();

            if (length === 0) {
                cy.log("List was empty, adding first item");
                sortedList.addToDo(item);
                sortedList.checkToDoLength(1);
            } else if (length < maxItems) {
                sortedList.addToDo(item);
                sortedList.checkNewToDo(item);
                sortedList.checkToDoLength(length + 1);
            } else {
                sortedList.toDoLengthIsFull();
            }
        });
    });


    // it("should not allow more than 5 items", () => {
    //     for (let i = 0; i < maxItems + 1; i++) {
    //         const item = `Task ${Date.now()}-${i}`;
    //         sortedList.addToDo(item);
    //     }
    //     sortedList.checkToDoLength(maxItems);
    //     sortedList.toDoLengthIsFull();
    // });

});
