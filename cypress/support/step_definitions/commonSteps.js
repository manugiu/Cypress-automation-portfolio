const { Given, Before } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pageObjects/LoginPage.js')

Before(function() {
  this.loginPage = new LoginPage();
});

Given('I am on the Saucedemo login page', function () {
  this.loginPage.goTo(Cypress.env('baseUrl'));
});