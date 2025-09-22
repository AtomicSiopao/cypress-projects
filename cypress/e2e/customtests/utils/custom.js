// Added custom utils for reusability
export function getValue(key, attribute) {
  return new Cypress.Promise((resolve) => {
    cy.get(key).invoke('attr', attribute).then(resolve);
  });
}
