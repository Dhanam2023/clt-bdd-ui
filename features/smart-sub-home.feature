Feature: As a Smart Submissions customer, I want to able to navigate this website.

@smartsub @smartsubHomepage
    Scenario: Customer is able to see the homepage of this website
        Given I am on "SmartSubPortal" website 
        When I click on "LoginButton"
        Then I should see "LoginHeader"

@smartsub @smartsubLoginErrorMessage
    Scenario: Customer is trying to login with invalid credentials
        Given I am on "SmartSubPortal" website 
        When I click on "LoginButton"
        And I enter a "email" as "textemail"
        And I enter a "password" as "textpassword"
        When I click on "LoginActionButton"
        Then I should see "EmailErrorMessage"
        #And I should see "PasswordErrorMessage"

 