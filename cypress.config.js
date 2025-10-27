const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl:'https://hcms-dev.sidmach.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
