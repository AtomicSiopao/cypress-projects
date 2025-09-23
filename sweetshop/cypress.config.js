const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "psrfe1",
  e2e: {
    "chromeWebSecurity": false,
    "baseUrl": "https://sweetshop.netlify.app",
    "video": false,
    specPattern: "cypress/e2e/*.spec.js",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});