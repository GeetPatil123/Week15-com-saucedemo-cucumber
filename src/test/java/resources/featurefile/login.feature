Feature: LoginPage Test
  As a user I want to login to the website by providing valid credentials

  @sanity @regression
  Scenario: User should Login with valid credentials
    Given I am on the HomePage
    When I click on Login link
    And I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click on Login Button
    Then I should Login successfully