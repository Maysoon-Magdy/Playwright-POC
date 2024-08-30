import { defineConfig, devices } from "@playwright/test"; // Import configuration functions and device settings

export default defineConfig({
  testDir: "src/tests", // Directory where test files are located
  timeout: 30000, // Global timeout for each test
  expect: {
    timeout: 5000, // Timeout for assertions
  },
  retries: 0, // Number of retries for failed tests; 0 means no retries
  use: {
    trace: "on-first-retry", // Enable tracing to help debug test failures
    headless: true, // Run tests in headless mode (no UI); set to false to see the browser
    viewport: { width: 1280, height: 720 }, // Set viewport size for tests
    baseURL: "https://www.saucedemo.com/", // Base URL for tests
    actionTimeout: 0, // Timeout for actions; 0 means no timeout
  },
  projects: [
    {
      name: "Desktop Chrome", // Test on Desktop Chrome
      use: { ...devices["Desktop Chrome"] }, // Use device settings for Desktop Chrome
    },
    {
      name: "Desktop Firefox", // Test on Desktop Firefox
      use: { ...devices["Desktop Firefox"] }, // Use device settings for Desktop Firefox
    },
    {
      name: "Desktop Safari", // Test on Desktop Safari
      use: { ...devices["Desktop Safari"] }, // Use device settings for Desktop Safari
    },
  ],
});
export const baseURL = 'https://www.saucedemo.com/';
