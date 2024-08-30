import { Page } from "@playwright/test"; // Import the Page class from Playwright
import { baseURL } from "../../playwright.config"; //

export class SignInPage {
  constructor(private page: Page) {} // Constructor to initialize the page instance
  private usernameInput = "#user-name";
  private passwordInput = "#password";
  private submitButton = "#login-button";
  getPage(): Page {
    return this.page;
  }
  async goto() {
    await this.page.goto(baseURL); // Navigate to the sign-in page
  }

  async fillForm(username: string, password: string) {
    await this.page.fill(this.usernameInput, username); // Fill the username field
    await this.page.fill(this.passwordInput, password); // Fill the password field
  }

  async submit() {
    await this.page.click(this.submitButton); // Click the submit button
  }

  async assertLoginSuccess() {
    await this.page.waitForURL("https://www.saucedemo.com/inventory.html"); // Verify successful login by checking the URL
  }
}
