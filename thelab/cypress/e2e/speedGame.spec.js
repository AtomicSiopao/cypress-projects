/// <reference types="cypress" />
const speed = require("../support/pages/speedGame");

describe('Do the Speed Game', () => {
  beforeEach(() => {
    speed.visit();
  });

  it('should check for end game button', () => {
    cy.log('Start the game');
    speed.startGame();
    cy.log('End the game');
    speed.endGame();
    //cy.log('Verify the score is displayed');
    //cy.contains('Your score is').should('be.visible');
    });
});