  Feature: Login
    As a registered user,
    I want to log into the application,
    So that I can access my personalized dashboard.

    Background:
      Given the user is on the login page

    Scenario: Successful login
      When I login with username "nguyenngockhmt@gmail.com" and password "ngocngoc8892"
      Then I should see the dashboard

    Scenario Outline: Failed login
      When I login with username "<username>" and password "<password>"
      Then I should see validation messages

      Examples:
          | username                     | password        | # comment                        |
          | #$#                          | ngocngoc889     | # invalid username               |
          | nguyenngockhmt@email         | $$%%%           | # invalid password               |
