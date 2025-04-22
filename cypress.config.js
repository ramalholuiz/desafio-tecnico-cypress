const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev/',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
  },
});
