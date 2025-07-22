const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com", // <-- Set your base URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // cypress.config.js (Cypress 10+)
    specPattern: "cypress/integration/**/*.js"
  },
});
