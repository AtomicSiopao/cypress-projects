// Added custom utils for reusability

export function getValue(key, attribute) {
    return cy.get(key).invoke('attr', attribute);
}