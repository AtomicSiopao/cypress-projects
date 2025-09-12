const { defineConfig } = require("cypress");
require("dotenv").config();
console.log(process.env.BROWSERSTACK_USERNAME, process.env.BROWSERSTACK_ACCESS_KEY);
module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    specPattern: "cypress/e2e/customtests/**/*.cy.js",
    setupNodeEvents(on, config) {
      config.env.BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME;
      config.env.BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;
      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
