/// <reference types="cypress" />
const waitGame = require("../support/pages/waitGame");

describe('Do the Wait Game', () => {
  beforeEach(() => {
    waitGame.visit();
  });

  it('should wait for 5 seconds before clicking the end game button', () => {
    cy.log('Start the game');
    waitGame.startGame();
    cy.wait(5000); // wait for 5 seconds to simulate game play
    cy.log('End the game');
    waitGame.endGame();
    });
});