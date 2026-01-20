const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const sqlServer = require('cypress-sql-server');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    db: {
      userName: "sa",
      password: "TuPasswordPro2025!",
      server: "localhost",
      options: { database: "master", encrypt: false, rowCollectionOnRequestCompletion: true },
    }, 
    baseUrl: 'https://www.saucedemo.com',
    username: 'standard_user',
    password: 'secret_sauce',

  },
  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Add cucumber FIRST
      await addCucumberPreprocessorPlugin(on, config);
      
      // Then add the bundler
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      });
      
      on("file:preprocessor", bundler);
      
      sqlServer.loadDBPlugin(on, config);
      
      return config;
    },
    specPattern: 'cypress/e2e/**/**',
    supportFile: 'cypress/support/e2e.js', 
    baseUrl: 'https://www.saucedemo.com'
  },
});