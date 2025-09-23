class LoginPage {
  visit() {
    cy.visit('/login');
  }

  inputField(selector, value) {
    return cy.get(selector).type(value);
  }

  submitButton() {
    return cy.get('button[type=submit]').contains('Login');
  }

  login(email, password) {
    this.inputField('input[id="exampleInputEmail"]', email);
    this.inputField('input[id="exampleInputPassword"]', password);
    this.submitButton().click();
  }
}
module.exports = new LoginPage();