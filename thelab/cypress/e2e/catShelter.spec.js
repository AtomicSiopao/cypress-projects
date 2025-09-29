const catShelter = require("../support/pages/catShelter");
describe("Add or remove a cat in the Cat Shelter", () => {
    beforeEach(() => {
        catShelter.visit();
    });

    const cat =
    {
        name: "Jarpild",
        description: "Calico",
        preference: "inside" // inside or outside
    }

    it("should add cat to cat shelter", () => {
        catShelter.addCat(cat.name, cat.description, cat.preference);
        catShelter.searchCat(cat.name);
    });

    it("should remove cat from cat shelter", () => {
        catShelter.searchCat(cat.name);
        catShelter.removeCat(cat.name);
    });

});