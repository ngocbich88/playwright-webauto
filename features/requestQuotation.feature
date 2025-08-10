Feature: Request Quotation
  As a logged-in user
  I want to request a quotation
  So that I can get an estimate and save it for future reference

  Background:
    Given the user is on the login page
    And I login with username "nguyenngockhmt@gmail.com" and password "ngocngoc8892"
    And I am on the Request Quotation tab

  Scenario: Resetting the quotation form
    When I fill in the quotation form with valid data: "Full", "Test incident", "ABC1234", "12000", "Public Place", "2025-09-01"
    And I click the reset form button
    Then all form fields should be cleared or reset to default values

  Scenario: Submitting the quotation form successfully
     When I fill in the quotation form with valid data: "Full", "Test incident", "ABC1234", "12000", "Public Place", "2025-09-01"
    And I click the save quotation button
    Then I should be redirected to the quotation confirmation page
    And I should see a quotation ID
