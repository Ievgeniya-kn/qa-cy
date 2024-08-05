const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
    retries: { "runMode": 0, "openMode": 0 },
    requestTimeout: 5000,
    defaultCommandTimeout: 5000,
    responseTimeout: 50000,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
