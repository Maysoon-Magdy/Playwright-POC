import { Given, When, Then } from "@cucumber/cucumber";
import { SignInPage } from "../../pages/signIn.page";
import { expect } from "@playwright/test";

let signInPage: SignInPage;
let errorMsg = ".error-message-container";

Given("I am on the sign-in page", async function ({ page }) {
  signInPage = new SignInPage(page);
  await signInPage.goto();
});

When("I enter valid credentials", async function () {
  await signInPage.fillForm("standard_user", "secret_sauce");
  await signInPage.submit();
});

When("I enter invalid credentials", async function () {
  await signInPage.fillForm("invalid_user", "wrong_password");
  await signInPage.submit();
});

Then("I should be redirected to the inventory page", async function () {
  await signInPage.assertLoginSuccess();
});

Then("I should see an error message", async function () {
  await expect(signInPage.getPage().locator(errorMsg)).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"
  );
});
