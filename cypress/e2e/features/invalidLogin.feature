Feature: Invalid credentials
    Background:
        Given I am on the Saucedemo login page

    Scenario: Error at login ig with locked out user
        When I login as "locked_out_user"
        Then I should see the message "Epic sadface"