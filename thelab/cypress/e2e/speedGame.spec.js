const speedGame = require("../support/pages/speedGamePage");

describe('Do the Speed Game', () => {
  beforeEach(() => {
    speedGame.visit();
  });

  it('should check for end game button', () => {
    cy.log('Start the game');
    speedGame.clickStartGameButton();
    cy.log('End the game');
    speedGame.clickEndGameButton();
    speedGame.checkSuccessMessage();
    speedGame.checkScore();
    });
});