const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({

  reporter: process.env.SAUCE_VM ? undefined : 'cypress-mochawesome-reporter',
  reporterOptions: process.env.SAUCE_VM ? undefined : {
    reportDir: '__assets__/cypress/report',
    reportFilename: 'output_' + new Date().toLocaleString('en-GB').replace(/[/, :]/g, '') + '.html',
    charts: true,
    reportPageTitle: 'Automation Report',
    html: true,
    json: true,
    overwrite: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false,
    ignoreVideos: true,
  },
  env:{
    deviceTypeThreshold: 1150,
    testDataFile: 'dataFile/userData',
    "baseUrl": "https://magento.softwaretestingboard.com/",
    
  },
  e2e: {
    specPattern: "**/e2e/step_definitions/**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
