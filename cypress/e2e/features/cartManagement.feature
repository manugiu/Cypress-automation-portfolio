Feature: Cart Management

    Background:
        Given I am on the Saucedemo login page
        And I login as "standard_user"
    
    Scenario: Remove item for the cart
        When I add "Sauce Labs Backpack" to the cart
        And I remove "Sauce Labs Backpack" from the cart
        Then The cart should be empty