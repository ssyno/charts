module.exports = {
  env: {
    username: 'admin',
    password: 'ComplicatedPassword123!4',
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://localhost',
  },
}
