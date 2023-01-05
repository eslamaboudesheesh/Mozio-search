import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:3000/',
        chromeWebSecurity: false,
        defaultCommandTimeout: 25000,
        testIsolation: false,
    },
    chromeWebSecurity: false,

    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
});
