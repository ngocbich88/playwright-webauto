Feature: Edit Profile
  As a logged-in user
  I want to edit my profile information
  So that my name, birthday, and address are up to date

  Background:
    Given the user is on the login page
    And I login with username "nguyenngockhmt@gmail.com" and password "ngocngoc8892"
    And I am on the edit profile page

  Scenario: Update profile successfully
    When I change my first name to "Nguyen"
    And I click update user
    Then I should see the name is updated

  # @skip
  # Scenario: Missing name
  #   When I clear the name field
  #   And I click save
  #   Then I should see an error message for the name

  # @skip
  # Scenario: Invalid birthday format
  #   When I enter "01-01-1990" as birthday
  #   And I click save
  #   Then I should see an error message for the birthday

  # @skip
  # Scenario: Empty address
  #   When I clear the address field
  #   And I click save
  #   Then I should see an error message for the address