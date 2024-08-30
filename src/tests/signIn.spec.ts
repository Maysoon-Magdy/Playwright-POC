import { test, expect } from "@playwright/test";
import { SignInPage } from "../pages/signIn.page";
import signInData from "../../data/signInData.json"; // Import JSON data

signInData.forEach(({ username, password, expected }) => {
  test(`Sign in with username ${username}`, async ({ page }) => {
    const signInPage = new SignInPage(page);

    await signInPage.goto();
    await signInPage.fillForm(username, password);
    await signInPage.submit();
    await page.waitForURL(expected);
  });
});
