context('Registration Page', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com');
        cy.get('.container-fluid > .row > .col-12').invoke('remove');
    })
    const time = new Date();
    const username = `cyuser${time.getTime()}`;
    const password = "SuperSecretCyPassword!";

    it('New user registration with mismatched password', () => {
        cy.log('username',username);
        cy.contains('a', 'Test Register Page').click();
        cy.url().should('include', '/register');
        cy.get('[name="aswift_1"]').invoke('remove'); //removes ads
        cy.contains('h1','Test Register page for Automation Testing Practice');
        cy.get('[name="username"]').scrollIntoView()
          .click()
          .type(username);
        cy.get('[name="password"]').click().type(password);
        cy.get('[name="confirmPassword"]').click().type(`$[password]1`);
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/register');
        cy.contains('#flash','Passwords do not match.');
    });

    it('New user registration', () => {
        cy.contains('a', 'Test Register Page').click();
        cy.url().should('include', '/register');
        cy.get('[name="aswift_1"]').invoke('remove'); //removes ads
        cy.contains('h1','Test Register page for Automation Testing Practice');
        cy.get('[name="username"]').scrollIntoView()
          .click()
          .type(username);
        cy.get('[name="password"]').click().type(password);
        cy.get('[name="confirmPassword"]').click().type(password);
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/login');
        cy.contains('#flash','Successfully registered, you can log in now.');
    });

   it('Login using newly registered user', () => {
        cy.contains('a', 'Test Login Page').click();
        cy.url().should('include', '/login');
        cy.contains('h1','Test Login page for Automation Testing Practice');
        cy.get('#username').click().type(username);
        cy.get('#password').click().type(password);
        cy.get('[type="submit"]').click();
        cy.url().should('include','/secure');
        cy.contains('h1','Secure Area page for Automation Testing Practice');
        cy.contains('.button','Logout').click();
        cy.url().should('include', '/login');
    });

    it('Register a new user with existing username', () => {
        cy.contains('a', 'Test Register Page').click();
        cy.url().should('include', '/register');
        cy.get('[name="aswift_1"]').invoke('remove'); //removes ads
        cy.contains('h1','Test Register page for Automation Testing Practice');
        cy.get('[name="username"]').scrollIntoView()
          .click()
          .type(username);
        cy.get('[name="password"]').click().type(password);
        cy.get('[name="confirmPassword"]').click().type(password);
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/register');
        cy.contains('#flash','An error occurred during registration. Please try again.');
    });

})