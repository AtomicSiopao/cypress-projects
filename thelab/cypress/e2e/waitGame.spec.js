/// <reference types="cypress" />
const waitGame = require("../support/pages/waitGamePage");

describe('Do the Wait Game', () => {
  beforeEach(() => {
    waitGame.visit();
  });

  it('should wait until the end button appears, then finish the game', () => {
    waitGame.startGame();   // starts and waits until "End Game" button is ready
    waitGame.endGame();     // clicks and verifies success message
  });
});
