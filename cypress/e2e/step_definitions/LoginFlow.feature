Feature: User Account Creation and Login

    Background:
        Given User navigate to LUMA application

    Scenario: Verify user account creation process
        Given User click on create my account link
        When User enters First Name "fName"
        And User enters Last Name "lName"
        And User enter email address
        And User enters Password "userPwd"
        And User enters Confirm Password "userPwd"
        And User click on Create an Account button
        Then My Account page "myAccountPageTitle" should be displayed
        And Thank you message for Account creation "thankYouMsg" should be displayed
        And Registered email address should be visible

    Scenario: Verify user Login functionality
        Given User click on Sign In link
        When User enter email id
        And User enters Password for login "userPwd" 
        And User click on Sign In button 
        Then Luma Logo should be displayed
        And Welcome "welcomeText" should be displayed on customer menu
        When User click on customer menu
        And User click on My Account link
        Then My Account page "myAccountPageTitle" should be displayed
        And Registered email address should be visible
