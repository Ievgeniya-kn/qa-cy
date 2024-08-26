const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },
  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
    USER_NAME: "standard_user",
    USER_PASSWORD: "secret_sauce",
    retries: { "runMode": 0, "openMode": 0 },
    requestTimeout: 5000,
    defaultCommandTimeout: 5000,
    responseTimeout: 50000,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    screenshotsFolder: "cypress/screenshots",
    testIsolation: true,
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
