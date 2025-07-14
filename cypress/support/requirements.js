// Centralized constant values for Cypress tests
// Use this file to define and export commonly used constants and requirements

const Requirements = {
  MinPasswordLength: 1, // SauceDemo allows any length for demo
  MaxPasswordLength: 20,
  SessionTimeoutMinutes: 30,
  MaxLoginAttempts: 5,
  ApiRequestTimeoutMs: 10000,
  // Add more as needed
};

module.exports = Requirements;

// Usage in tests:
// const Requirements = require('../support/requirements');
// expect(password.length).to.be.gte(Requirements.MinPasswordLength); 