package com.saucedemo.steps;

import com.saucedemo.pages.ProductsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class ProductsPageSteps {
    @And("^I verify Products text is displayed on the Products Page$")
    public void iVerifyProductsTextIsDisplayedOnTheProductsPage() {
        String expectedText = "Products";
        String actualText = new ProductsPage().getProductText();
        Assert.assertEquals(expectedText, actualText, "Products text is not visible");
    }

    @Then("^I verify (\\d+) products are displayed on the Products Page$")
    public void iVerifyProductsAreDisplayedOnTheProductsPage(int arg0) {
        int expectedNumberOfProducts = 6;
        int actualNumberOfProducts = new ProductsPage().findActualNoOfProducts();
        Assert.assertEquals(actualNumberOfProducts, expectedNumberOfProducts, "Number of products do not match ");
    }
}
