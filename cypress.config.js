const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    baseUrl: 'https://bookcart.azurewebsites.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
