Feature: E2E Checkout Process

  Background:
    Given I am on the Saucedemo login page
    And I login as "standard_user"
  
  Scenario: Complete a purchase successfully
    When I add "Sauce Labs Backpack" to the cart
    And I proceed to checkout
    And I fill the checkout form with "Manu", "Giu" and "1417"
    And I click continue
    And I complete the order
    Then I should see the message "Thank you for your order!"