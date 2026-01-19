Feature: Multi-item Checkout

    Background:
        Given I am on the Saucedemo login page
        And I login as "standard_user"
    
    Scenario: Complete purchase with multiple items
    When I add "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" to the cart
    And I proceed to checkout
    And I fill the checkout form with "Manu", "Giu" and "1417"
    And I click continue
    Then "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" should be in the order summary