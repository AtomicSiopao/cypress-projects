const catOrDogPage = require("../support/pages/catOrDogPage");
const addCatPage = require("../support/pages/addCatPage");
const catShelterPage = require("../support/pages/catShelterPage");
const formFill = require("../support/pages/formFillPage");
const sortedList = require("../support/pages/sortedListPage");
const speedGame = require("../support/pages/speedGamePage");
const tables = require("../support/pages/tablesPage");
const waitGame = require("../support/pages/waitGamePage");
const yellowOrBlue = require("../support/pages/yellowOrBluePage");

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
    cy.fixture("live").then((cat) => {
      catShelterPage.clickAddCat();
      addCatPage.createCat(
        cat.catShelter.catName,
        cat.catShelter.catDescription,
        cat.catShelter.catPreference
      );
      catShelterPage.searchCat(cat.catShelter.catName).should("be.visible");
    });
  });

  it("Should remove cat from cat shelter", () => {
    cy.fixture("live").then((cat) => {
      cat = cat.catShelter.catName;
      catShelterPage.searchCat(cat);
      catShelterPage.removeCat(cat);
      catShelterPage.searchCat(cat).should("not.exist");
    });
  });
});

describe("Fill up the form", () => {
  beforeEach(() => {
    formFill.visit();
  });

  it("Should fill out the form with valid data", () => {
    cy.fixture("live").then((user) => {
      formFill.saveUserToDB(
        user.formFill.firstname,
        user.formFill.lastname,
        user.formFill.email,
        user.formFill.password
      );
    });
  });

  it("Should check if user is recorded in the DB", () => {
    cy.fixture("live").then((user) => {
      formFill
        .clickUserInDBButton()
        .checkIfUserIsInDB(user.formFill.firstname, user.formFill.lastname);
    });
  });

  it("Should remove created user from DB", () => {
    cy.fixture("live").then((user) => {
      formFill.removeUserFromDB(
        user.formFill.firstname,
        user.formFill.lastname
      );
    });
  });

  describe("Add todo in todo list", () => {
    beforeEach(() => {
      sortedList.visit();
    });

    it("Should add item to list until max is reached", () => {
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
          cy.log("Max items reached.");
        }
      });
    });

    it("Should not allow adding more items if current list is equal to 5", () => {
      cy.fixture("live").then((data) => {
        const maxItems = data.sortedList.maxItems;
        for (let i = 0; i < maxItems + 1; i++) {
          const item = `Task ${Date.now()}-${i}`;
          sortedList.addToDo(item);
        }
        sortedList.checkToDoLength(maxItems);
        sortedList.toDoLengthIsFull();
      });
    });
  });
});
describe("Speed Game", () => {
  beforeEach(() => {
    speedGame.visit();
  });

  it("should check for end game button and click it", () => {
    cy.log("Start the game");
    speedGame.clickStartGameButton();

    cy.log("End the game");
    speedGame.clickEndGameButton();
    speedGame.checkSuccessMessage();
    speedGame.checkScore();
  });
});

describe("Tables", () => {
  beforeEach(() => {
    tables.visit();
  });

  it("should remove the animals in the unchecked filter", () => {
    cy.fixture("live").then((data) => {
      let animals = data.tables.animals;
      animals.forEach((animal) => {
        tables.uncheckFilter(animal);
      });
    });
  });

  it("should display the animals in the checked filter", () => {
    // uncheck all first
    cy.fixture("live").then((data) => {
      let animals = data.tables.animals;
      animals.forEach((animal) => {
        tables.uncheckFilter(animal);
      });

      // then re-check all
      animals.forEach((animal) => {
        tables.checkFilter(animal);
      });
    });
  });
});

describe("Wait Game", () => {
  beforeEach(() => {
    waitGame.visit();
  });

  it("should wait until the end button appears, then finish the game", () => {
    waitGame.startGame(); // starts and waits until "End Game" button is ready
    waitGame.endGame(); // clicks and verifies success message
  });
});

describe("Yellow Or Blue", () => {
  beforeEach(() => {
    yellowOrBlue.visit();
  });

  it("should generate a color and click the correct button based on alt text", () => {
    yellowOrBlue.generateColor();
    yellowOrBlue.chooseColor();
    yellowOrBlue.verifySuccess();
  });
});
