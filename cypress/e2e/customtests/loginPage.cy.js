context('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://practice.expandtesting.com');
        cy.get('.container-fluid > .row > .col-12').invoke('remove');
    })

    it('Login using valid credentials', () => {
        cy.contains('a', 'Test Login Page').click();
        cy.url().should('include', '/login');
        cy.contains('h1','Test Login page for Automation Testing Practice');
        const username = "practice";
        const password = "SuperSecretPassword!";
        cy.get('#username').click().type(username);
        cy.get('#password').click().type(password);
        cy.get('[type="submit"]').click();
        cy.url().should('include','/secure');
        cy.contains('h1','Secure Area page for Automation Testing Practice');
        cy.contains('.button','Logout').click();
        cy.url().should('include', '/login');
    });

    it('Login using incorrect username', () => {
        cy.contains('a', 'Test Login Page').click();
        cy.url().should('include', '/login');
        cy.contains('h1','Test Login page for Automation Testing Practice');
        const username = "randomStringForUsername";
        const password = "SuperSecretPassword!";
        cy.get('#username').click().type(username);
        cy.get('#password').click().type(password);
        cy.get('[type="submit"]').click();
        cy.contains('#flash', 'Your username is invalid!');
        cy.url().should('include', '/login');
    });

    it('Login using invalid password', () => {
        cy.contains('a', 'Test Login Page').click();
        cy.url().should('include', '/login');
        cy.contains('h1','Test Login page for Automation Testing Practice');
        const username = "practice";
        const password = "wrongPassword!";
        cy.get('#username').click().type(username);
        cy.get('#password').click().type(password);
        cy.get('[type="submit"]').click();
        cy.contains('#flash', 'Your password is invalid!');
        cy.url().should('include', '/login');
    });

})