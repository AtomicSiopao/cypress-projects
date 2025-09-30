const formFill = require("../support/pages/formFillPage");

describe("Fill up the form", () => {
    beforeEach(() => {
        formFill.visit();
    });

    const credentials =
        { 
            firstName: "Dodong",
            lastName: "Charing",
            email: "dong.char@eklabu.com",
            password: "DodongCharing"
        };

    it("should fill out the form with valid data", () => {
        formFill.saveUserToDB(credentials.firstName, credentials.lastName, credentials.email, credentials.password);
        //formFill.saveUserToDB();
    });
});