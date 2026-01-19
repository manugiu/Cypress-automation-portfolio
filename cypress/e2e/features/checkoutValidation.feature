Feature: Empty fields in the Checkout

    Background:
        Given I am on the Saucedemo login page
        And I login as "standard_user"
        And I add "Sauce Labs Backpack" to the cart
        And I proceed to checkout
    
    Scenario: Empty Postal Code
    When I fill the checkout form with first name "Manu" and last name "Giu"
    And I click continue
    Then I should see message "Error: Postal Code is required"


    Scenario: Empty Last Name
    When I fill the checkout form with first name "Manu" and postal code "1406"
    And I click continue
    Then I should see message "Error: Last Name is required"

    Scenario: Empty First Name
    When I fill the checkout form with last name "Giu" and postal code "1406"
    And I click continue
    Then I should see message "Error: First Name is required"
