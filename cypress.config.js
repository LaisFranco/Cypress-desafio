const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'me1495',
  e2e: {
    baseUrl: "https://www.automationexercise.com/login",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
