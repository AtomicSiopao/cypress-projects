const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    specPattern: "cypress/e2e/customtests/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
