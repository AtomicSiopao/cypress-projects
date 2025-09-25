const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    "watchForFileChanges": true, // fixes issue with new specs not showing up
    "baseUrl": "https://thelab.boozang.com",
    "video": false,
    specPattern: "./cypress/e2e/*.spec.js",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});