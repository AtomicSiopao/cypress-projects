// cypress/e2e/catOrDog.spec.js
const catOrDogPage = require("../support/pages/catOrDogPage");
const addCatPage = require("../support/pages/addCatPage");
const catShelterPage = require("../support/pages/catShelterPage");
const formFill = require("../support/pages/formFillPage");

describe("Identify the animal by clicking the correct button", () => {
  beforeEach(() => {
    catOrDogPage.visit();
  });

  it("Should identify the animal and click the corresponding button 10 times", () => {
    Cypress._.times(10, () => {
      catOrDogPage.generateImage();
      catOrDogPage.checkImageAndClick();
    });
  });
});

describe("Add or remove a cat in the Cat Shelter", () => {
  beforeEach(() => {
    catShelterPage.visit();
  });

  it("Should add cat to cat shelter", () => {
    cy.fixture("cats").then((cats) => {
      catShelterPage.clickAddCat();
      addCatPage.createCat(
        cats[1].name,
        cats[1].description,
        cats[1].preference
      );
      catShelterPage.searchCat(cats[1].name).should("be.visible");
    });
  });

  it("Should remove cat from cat shelter", () => {
    cy.fixture("cats").then((cats) => {
      catShelterPage.searchCat(cats[1].name);
      catShelterPage.removeCat(cats[1].name);
      catShelterPage.searchCat(cats[1].name).should("not.exist");
    });
  });
});

describe("Fill up the form", () => {
  beforeEach(() => {
    formFill.visit();
  });

  it("Should fill out the form with valid data", () => {
    cy.fixture("users").then((users) => {
      formFill.saveUserToDB(
        users[2].firstname,
        users[2].lastname,
        users[2].email,
        users[2].password
      );
    });
  });

  it("Should check if user is recorded in the DB", () => {
    cy.fixture("users").then((users) => {
      formFill
        .clickUserInDBButton()
        .checkIfUserIsInDB(users[2].firstname, users[2].lastname);
    });
  });
});
