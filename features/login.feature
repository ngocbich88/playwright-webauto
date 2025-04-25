Feature: Home page

  Scenario: Open the home page
    Given I open the application
    Then I should see the home page

  Scenario: Login with SQL injection
    Given I open the application
    When I login with username "admin" and password "101 OR 1=1"
    Then I should see the forbidden page