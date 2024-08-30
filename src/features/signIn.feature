Feature: Sign In

  Scenario Outline: Sign in with credentials
    Given I am on the sign-in page
    When I enter "<username>" and "<password>"
    Then I should be redirected to "<expected>"

    Examples:
      | username      | password       | expected                                  |
      | standard_user | secret_sauce   | https://www.saucedemo.com/inventory.html  |
      | invalid_user  | wrong_password | https://www.saucedemo.com/incorrect_login |
