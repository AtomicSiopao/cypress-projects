/// <reference types="cypress" />
const login = require('../support/pages/loginPage');
const nav = require('../support/pages/navBar');
const { userLogin } = require('./customtests/utils/testData');

describe('Login flow', () => {
  beforeEach(() => {
    login.visit();
  });

  it('should log in with valid credentials', () => {
    login.login(userLogin.email, userLogin.password);
  });
});