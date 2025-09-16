const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "psrfe1",
  e2e: {
    "chromeWebSecurity": false,
    specPattern: "cypress/e2e/customtests/**/*.cy.js",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
