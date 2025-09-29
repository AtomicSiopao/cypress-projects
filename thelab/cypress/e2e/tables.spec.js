const tables = require("../support/pages/tables");

describe.only("Toggle checkboxes to filter animals in the Savannah", () => {
    const animals = ["lion", "elephant", "zebra"];

    beforeEach(() => {
        tables.visit();
    });

    it("should remove the animals in the unchecked filter", () => {
        animals.forEach((animal) => {
            tables.uncheckFilter(animal);
            tables.checkFilterState(animal, "false"); // assert unchecked
        });
    });

    it("should display the animals in the checked filter", () => {
        // uncheck all first
        animals.forEach((animal) => {
            tables.uncheckFilter(animal);
        });

        // then re-check all
        animals.forEach((animal) => {
            tables.checkFilter(animal);
            tables.checkFilterState(animal, "true"); // assert checked
        });
    });
});
