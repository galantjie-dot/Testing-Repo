
Feature: Login
  Scenario: verify user is able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on My Account
    And I enter E-mail Address "galantjie@gmail.com"
    And I enter Password "Faakhirah@10"
    When I click on submit button
    Then I should verify the url contains "route=account/account"


   
  Scenario Outline: Verify user is not able login with following credentials
    Given the user navigates to the https://ecommerce-playground.lambdatest.io/ page
    And I clicks on the My Account
    And I enter E-mail Address "test@example.com "
    And I enter Password "testpassword"
    When the user clicks the login button
    Then the user should verify that user is not able to login and the url contains "route=account/login"

  Scenario: Password recovery process
    Given the user is on the login page
    When the user clicks on the "Forgot Password" link
    And enters their registered email address
    Then a password recovery email should be sent to the user's email address

    Examples:
      | email                   | password |
      | galantjie@gmail.com     | Faakhirah210 |
      | test@example.com        | testpassword |
      | user@example.com        | userpassword |