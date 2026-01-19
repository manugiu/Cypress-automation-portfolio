const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import LoginPage from '../../pageObjects/LoginPage';
import CartPage from '../../pageObjects/CartPage';
import InventoryPage from '../../pageObjects/InventoryPage';
import CheckoutPage from '../../pageObjects/CheckoutPage';

When('I login as {string}', function (userType) {
  cy.fixture('users').then((users) => {
    const user = users[userType];
    this.inventoryPage = this.loginPage.login(user.username, user.password);
  });
});

When('I add {string} to the cart', function (productName) {
  this.inventoryPage.addItem(productName)
});

When('I proceed to checkout', function () {
  this.cartPage = this.inventoryPage.goToCartPage()
  this.checkoutPage = this.cartPage.proceedToCheckout()
});

When ('I fill the checkout form with {string}, {string} and {string}', function (name, lastname, CP) {
  this.checkoutPage.fillForm(name,lastname, CP)
})

When ('I click continue', function() {
  this.checkoutOverviewPage = this.checkoutPage.clickContinue()
})

When ('I complete the order', function(){
  this.checkoutComplete = this.checkoutOverviewPage.finishOrder();
})

Then ('I should see the message {string}', function(message){
  cy.contains(message).should('be.visible')
})

// SCENARIO: INCORREC LOGIN

When('I login with username {string} and password {string}', function (inc_user, inc_pass) {
  this.loginPage = loginPage.login(inc_user, inc_pass)
});

Then ('I should see the inventory page', function() {
  this.inventoryPage = new InventoryPage()
  this.inventoryPage.verifyPageLoaded()
})

// SCENARIO: Cart Management

When ('I remove {string} from the cart', function(productName) {
  this.inventoryPage.removeProduct(productName)
})

Then ('The cart should be empty', function() {
  this.cartPage = this.inventoryPage.goToCartPage()
  this.cartPage.verifyCartIsEmpty()  
})

// SCENARIO: Checkout Validation

When ('I fill the checkout form with first name {string} and last name {string}', function(name, lastname) {
  this.checkoutPage.fillForm(name, lastname, '')
})

When ('I fill the checkout form with first name {string} and postal code {string}', function(name, pc) {
  this.checkoutPage.fillForm(name, '', pc)
})

When ('I fill the checkout form with last name {string} and postal code {string}', function(lastname, pc) {
  this.checkoutPage.fillForm('', lastname, pc)
})

Then ('I should see message {string}', function(message) {
  this.checkoutPage.verifyErrorMessage(message)
})

// SCENARIO: Multi Item Checkout

When ('I add {string} and {string} to the cart', function(prod1, prod2) {
  this.inventoryPage.addItem(prod1)
  this.inventoryPage.addItem(prod2)
})

Then ('{string} and {string} should be in the order summary', function(prod1, prod2) {
  this.checkoutOverviewPage.verifyOrderSummary(prod1)
  this.checkoutOverviewPage.verifyOrderSummary(prod2)
})