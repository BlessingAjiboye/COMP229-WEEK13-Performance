export default {
  e2e: {
    setupNodeEvents(on, config) {
      
      require('@cypress/vite-plugin')(on, config);
      return config;
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
};
