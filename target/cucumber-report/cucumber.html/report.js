$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPage Test",
  "description": "As a user I want to login to the website by providing valid credentials",
  "id": "loginpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2477239501,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should Login with valid credentials",
  "description": "",
  "id": "loginpage-test;user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 63870499,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 18501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 105931900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 52182200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 76082500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.after({
  "duration": 633723200,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "ProductsPage Test",
  "description": "\r\nAs user I want to Login and navigate to Products Page of com-sauce demo website",
  "id": "productspage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1277304500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should Login with valid credentials and verify Products text and Number of Products",
  "description": "",
  "id": "productspage-test;user-should-login-with-valid-credentials-and-verify-products-text-and-number-of-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter username \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify Products text is displayed on the Products Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify 6 products are displayed on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 131164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 65331200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 99356001,
  "status": "passed"
});
formatter.match({
  "location": "ProductsPageSteps.iVerifyProductsTextIsDisplayedOnTheProductsPage()"
});
formatter.result({
  "duration": 44089000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "ProductsPageSteps.iVerifyProductsAreDisplayedOnTheProductsPage(int)"
});
formatter.result({
  "duration": 18288101,
  "status": "passed"
});
formatter.after({
  "duration": 646153199,
  "status": "passed"
});
});