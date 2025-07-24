// Scenario: Inventory Page UI Test Suite for saucedemo.com
// Scenario: This file outlines the sequential use cases for the inventory page UI, following the test-writing-guideline.md and the latest configs

import { UsernameInput, PasswordInput, SubmitButton, ProductTitle, AddToCartButton, CartIcon, SortDropdown, ProductPrice, MenuButton, LogoutLink } from '../../support/selectors';
const L10n = require('../../support/l10n.json');
const Urls = require('../../support/urls');
const Users = require('../../sensitive-data/env-users.json');

function login() {
  cy.visit(Urls.Login);
  cy.get(UsernameInput).type(Users.StandardUser.Username);
  cy.get(PasswordInput).type(Users.StandardUser.Password);
  cy.get(SubmitButton).then(($btn) => {
    cy.wrap($btn).click();
  });
}

describe('Inventory Page UI (saucedemo.com)', { testIsolation: false }, () => {
  before(() => {
    login();
  });

  context('Given the inventory page is loaded, then all products have Add to Cart buttons', () => {
    it('Each product displays an Add to Cart button', () => {
      cy.get(AddToCartButton).should('have.length.greaterThan', 0);
      cy.get(AddToCartButton).each(($btn) => {
        cy.wrap($btn).should('be.visible');
      });
    });
  });

  context('When the user adds multiple products to the cart, then the cart icon updates accordingly', () => {
    it('Cart icon shows correct number after adding two products', () => {
      cy.get(AddToCartButton).eq(0).click();
      cy.get(AddToCartButton).eq(1).click();
      cy.get(CartIcon).should('contain', '2');
    });
  });

  // Scenario: Product details
  context('When the user clicks a product, then the product details page opens', () => {
    it('When the user clicks a product title, then the details page is shown', () => {
      cy.get(ProductTitle).first().click();
      cy.url().should('include', '/inventory-item');
    });
  });

  // Scenario: Logout
  context('When the user logs out, then they are redirected to the login page', () => {
    it('When the user clicks logout, then the login page is shown', () => {
      cy.get(MenuButton).click();
      cy.get(LogoutLink).click();
      cy.url().should('eq', Urls.Login);
    });
  });

  // Scenario: Cart page
  context('When the user navigates to the cart, then added products are listed', () => {
    it('Cart page displays all added products', () => {
      cy.get(AddToCartButton).eq(0).click();
      cy.get(AddToCartButton).eq(1).click();
      cy.get(CartIcon).click();
      cy.url().should('include', '/cart');
      cy.get('.cart_item').should('have.length.at.least', 2);
    });
  });

  // Scenario: Sorting
  context('When the user sorts products, then the product order changes', () => {
    it('Sorting by price updates the product list order', () => {
      cy.get(SortDropdown).select('lohi');
      cy.get(ProductPrice).then($prices => {
        const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sorted);
      });
    });
  });
}); 