// Login Page UI Test Suite for saucedemo.com
// This file outlines the sequential use cases for the login page UI, following the test-writing-guideline.md and the latest configs

import { UsernameInput, PasswordInput, SubmitButton } from '../../support/selectors';
const Requirements = require('../../support/requirements');
const L10n = require('../../support/l10n.json');
const Urls = require('../../support/urls');
const Users = require('../../sensitive-data/env-users.json');

Cypress.Commands.add('login', (username, password) => {
  cy.get(UsernameInput).type(username);
  cy.get(PasswordInput).type(password);
  cy.get(SubmitButton).click();
});

describe('Login Page UI (saucedemo.com)', { testIsolation: false }, () => {
  before(() => {
    cy.visit(Urls.Login);
  });

  afterEach(() => {
    cy.url().then(url => {
      if (url === Urls.Login) {
        cy.get(UsernameInput).clear();
        cy.get(PasswordInput).clear();
      }
    });
  });

  // Scenario: Successful login
  context('Given valid credentials, when the user submits the login form, then the user should be redirected to the inventory page', () => {
    it('Given the login page is loaded, then the username and password fields are visible', () => {
      cy.get(UsernameInput).should('be.visible');
      cy.get(PasswordInput).should('be.visible');
    });

    it('When the user enters valid credentials, then the fields contain the entered values', () => {
      cy.get(UsernameInput).type(Users.StandardUser.Username);
      cy.get(PasswordInput).type(Users.StandardUser.Password);
      cy.get(UsernameInput).should('have.value', Users.StandardUser.Username);
      cy.get(PasswordInput).should('have.value', Users.StandardUser.Password);
    });

    it('When both fields are filled, then the submit button is enabled', () => {
      cy.get(UsernameInput).type(Users.StandardUser.Username);
      cy.get(PasswordInput).type(Users.StandardUser.Password);
      cy.get(SubmitButton).should('be.enabled');
    });

    it('When the user logs in successfully, then they are redirected to the inventory page', () => {
      cy.get(UsernameInput).type(Users.StandardUser.Username);
      cy.get(PasswordInput).type(Users.StandardUser.Password);
      cy.get(SubmitButton).then(($btn) => {
        cy.wrap($btn).click();
      });
      cy.url().should('eq', Urls.Inventory);
      cy.get('h1, .title').should('contain', L10n.Inventory.Title);
    });
  });

  // Scenario: Invalid credentials
  context.skip('Given invalid credentials, when the user submits the login form, then an error message should be displayed', () => {
    it.skip('When the user enters invalid credentials, then an error message is displayed', () => {
      // Not implemented yet
      // Use Selectors.Login.ErrorMessage, L10n.LoginPage.ErrorInvalidCredentials
    });
    it.skip('When login fails, then the user remains on the login page', () => {
      // Not implemented yet
      // Use Urls.Login
    });
  });

  // Scenario: Validation
  context.skip('Given incomplete input, when the user attempts to submit the form, then validation errors should be shown', () => {
    it.skip('When the username field is empty, then a validation error is shown', () => {
      // Not implemented yet
    });
    it.skip('When the password field is empty, then a validation error is shown', () => {
      // Not implemented yet
    });
    it.skip('When the password does not meet length requirements, then a validation error is shown', () => {
      // Not implemented yet
      // Use Requirements.MinPasswordLength, Requirements.MaxPasswordLength
    });
  });

  // Scenario: UI elements
  context.skip('Given the login page is loaded, then all required UI elements should be visible', () => {
    it.skip('Given the login page is loaded, then the page title is visible', () => {
      // Not implemented yet
      // Use L10n.LoginPage.Title
    });
    it.skip('Given the login page is loaded, then the submit button is visible', () => {
      // Not implemented yet
      // Use Selectors.Login.SubmitButton, L10n.LoginPage.SubmitButton
    });
    it.skip('Given the login page is loaded, then the username and password labels are visible', () => {
      // Not implemented yet
      // Use L10n.LoginPage.UsernameLabel, L10n.LoginPage.PasswordLabel
    });
  });

  // Scenario: Security
  context.skip('Given the login form, then sensitive data should not be exposed', () => {
    it.skip('Given the login page is loaded, then the password input is masked', () => {
      // Not implemented yet
      // Use Selectors.Login.PasswordInput
    });
    it.skip('Given the login page is loaded, then the password field is not autofilled', () => {
      // Not implemented yet
    });
  });

  // Scenario: Locked out user
  context.skip('Given a locked out user, when they attempt to log in, then an appropriate error message should be displayed', () => {
    it.skip('When a locked out user attempts to log in, then an error message is displayed', () => {
      // Not implemented yet
      // Use Users.LockedOutUser.Username, Users.LockedOutUser.Password
    });
  });

  // Add more scenarios as needed, following the guidelines
}); 