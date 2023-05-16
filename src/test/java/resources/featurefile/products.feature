Feature: ProductsPage Test

  As user I want to Login and navigate to Products Page of com-sauce demo website

  @smoke @regression
  Scenario: User should Login with valid credentials and verify Products text and Number of Products

    Given I am on the HomePage
    When I click on Login link
    And I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click on Login Button
    And I verify Products text is displayed on the Products Page
    Then I verify 6 products are displayed on the Products Page