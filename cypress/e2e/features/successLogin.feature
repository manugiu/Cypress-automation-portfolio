Feature: Correct login
    Background: 
        Given I am on the Saucedemo login page

    Scenario: Login successfull
        When I login as "standard_user"
        Then I should see the inventory page