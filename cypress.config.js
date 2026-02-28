const { defineConfig } = require("cypress");
// 1. This line finds the .env file and loads it into Node's memory (process.env)
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // 2. We take everything currently in Node's memory (process.env)
      // and spread it (...) into the Cypress env object.
      // This "bridges" the gap between Node and the Browser.
      config.env = {
        ...config.env,
        ...process.env
      };
      watchForFileChanges: false

      // 3. We MUST return the config object so Cypress uses the new values
      return config;
    },
  },
});