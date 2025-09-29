const formFill = require("../support/pages/formFill");

describe("Fill up the form", () => {
    beforeEach(() => {
        formFill.visit();
    });

    const credentials =
        { 
            firstname: "Alice",
            lastname: "Smith",
            email: "alicesmith@aaa.com",
            password: "Alice123"
        };

    it("should fill out the form with valid data", () => {
        formFill.fillForm(credentials.firstname, credentials.lastname, credentials.email, credentials.password);
        formFill.saveToDB();
    });
});