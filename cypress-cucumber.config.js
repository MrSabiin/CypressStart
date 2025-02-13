const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalSourceRewriting: true,
  watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
