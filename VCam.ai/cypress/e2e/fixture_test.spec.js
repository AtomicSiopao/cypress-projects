const dashboard = require("../pageObjects/pages/dashboardPage.js");
import { emails } from "../fixtures/data";

describe("Fixture Test using JSON and JS", () => {
  beforeEach(() => {
    dashboard.visit();
    cy.fixture("users.json").as("users");
  });

  it("JSON Test", function () {
    this.users.forEach((user) => {
      cy.log(user.email);
    });
  });

  it("JS Test", () => {
    emails.forEach((email) => {
      cy.log(email);
    });
  });
});