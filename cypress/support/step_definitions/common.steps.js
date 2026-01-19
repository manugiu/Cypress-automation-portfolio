const { Given, Before, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pageObjects/LoginPage.js');
const InventoryPage = require('../../pageObjects/InventoryPage.js');
const CartPage = require('../../pageObjects/CartPage.js');
const CheckoutPage = require('../../pageObjects/CheckoutPage.js');

Before(function() {
  this.loginPage = new LoginPage();
  this.inventoryPage = new InventoryPage();
  this.cartPage = new CartPage();
  this.checkoutPage = new CheckoutPage();
});

Given('I am on the Saucedemo login page', function () {
  this.loginPage.goTo(Cypress.env('baseUrl'));
});


Then ('I should see the message {string}', function(message){
  cy.contains(message).should('be.visible');
})
