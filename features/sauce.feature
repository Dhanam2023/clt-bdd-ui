
Feature: As a saucedemo customer, I have to be able to login successfully so that I can view and purchase products

@saucedemo @saucedemoLogin
    Scenario Outline: Customer is displayed with saucedemo login page.
        Given I log into "SauceDemoPortal" website as "<username>","<password>" and "LoginActionButton"
        Then I should see "ProductsHeader" page
        Examples: 
        | username | password |
        | standard_user | secret_sauce |
        #| locked_out_user | secret_sauce |
        #| problem_user | secret_sauce |
        #| performance_glitch_user | secret_sauce |
        #| error_user | secret_sauce |
        #| visual_user | secret_sauce |

@saucedemo @saucedemoProductsDetails
    Scenario Outline: Customer is displayed with saucedemo login page.
        Given I log into "SauceDemoPortal" website as "<username>","<password>" and "LoginActionButton"
        When I click on "ProductImage" or "ProductName" in products page
        #And  I click on "ProductName" in products page
        Then I should see "ProductDetail" page
         
        Examples: 
        | username | password |
        | standard_user | secret_sauce |
        
@saucedemo @saucedemoAddingProducts
    Scenario Outline: As a customer I want to add items to my shopping cart. So that I can purchase them later.
        Given I log into "SauceDemoPortal" website as "<username>","<password>" and "LoginActionButton"
        #Given I am on the products page
        When I click the Add_to_Cart button 
        |Add_to_Cart|
        |Add_Backbag|
        |Add_BikeLight|
        |Add_BoltTShirt|
        |Add_FleeceJacket|
        |Add_Onezie|
        |Add_RedTshirt|
        #Then Items should be added to my shopping cart
        And I click the "my_shopping_cart"
        Then The shopping cart should display all the items
        Examples: 
        | username | password |
        | standard_user | secret_sauce |        

@saucedemo @saucedemoCheckoutProducts
    Scenario Outline: As a customer I want to checkout items from my shopping cart.
        Given I log into "SauceDemoPortal" website as "<username>","<password>" and "LoginActionButton"
        When I click the "my_shopping_cart"
        Then The shopping cart should display all the items

        When I click the "Checkout_button"
        And I enter "First_Name" as "Ashok"
        And I enter "Last_Name" as "Kumar"
        And I enter "Postal_Code" as "92596"
        And I click the "ContinueCheckout_button" 
        Then I should see "CheckoutOverview_header" page
        When I click the "FinishCheckout_button"
        Then I should see "Thankyou_message" page
        When I click the "BacktoHome_button" 
        Then I should see "ProductsHeader" page 

        Examples: 
        | username | password |
        | standard_user | secret_sauce |        
