const login = require('../support/pages/LoginPage');
const nav = require('../support/pages/NavBar');

describe('Login flow', () => {
  beforeEach(() => {
    login.visit();
  });

  it('should log in with valid credentials', () => {
    cy.fixture('login').then((user) => {
      login.login(user.email, user.password);
      // assert something after login, maybe user is greeted, or login link disappears
      nav.loginLink().should('not.exist');
      // maybe a logout link appears
    });
  });
});
