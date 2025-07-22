// cypress/support/selectors.js

const Selectors = {
  Login: {
    UsernameInput: '#user-name',
    PasswordInput: '#password',
    SubmitButton: '#login-button',
    ErrorMessage: '[data-test="error"]'
  },
  Inventory: {
    ProductTitle: '.inventory_item_name',
    AddToCartButton: '.btn_inventory',
    CartIcon: '.shopping_cart_link'
  },
  // Add more as needed
};

module.exports = Selectors; 