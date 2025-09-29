const addCatPage = require("../support/pages/addCatPage");
const catShelterPage = require("../support/pages/catShelterPage");

describe("Add or remove a cat in the Cat Shelter", () => {
    beforeEach(() => {
        catShelterPage.visit();
    });

    const cat =
    {
        name: "Jopi",
        description: "Pug",
        preference: "inside" // inside or outside
    }

    it("should add cat to cat shelter", () => {
        catShelterPage.clickAddCat();
        addCatPage.createCat(cat.name, cat.description, cat.preference);
        catShelterPage.searchCat(cat.name).should('be.visible');
    });

    it("should remove cat from cat shelter", () => {
        catShelterPage.searchCat(cat.name);
        catShelterPage.removeCat(cat.name);
        catShelterPage.searchCat(cat.name).should('not.exist');
    });

});