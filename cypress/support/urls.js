// Centralized URLs for Cypress tests
// Use this file to define and export commonly used URLs for pages and endpoints

const Urls = {
  Home: 'https://www.saucedemo.com/',
  Login: 'https://www.saucedemo.com/',
  Inventory: 'https://www.saucedemo.com/inventory.html',
  Cart: 'https://www.saucedemo.com/cart.html',
  // Add more as needed
};

module.exports = Urls;

// Usage in tests:
// const Urls = require('../support/urls');
// cy.visit(Urls.Login); 