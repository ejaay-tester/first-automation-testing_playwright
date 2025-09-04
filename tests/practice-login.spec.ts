import { test, expect } from "@playwright/test"

test("Should load the homepage successfully", async ({ page }) => {
  await page.goto("https://playwright.dev/")
  await expect(page).toHaveTitle(/Playwright/)
})

test("Verify that a user can successfully log in with valid credentials", async ({
  page,
}) => {
  await page.goto("https:saucedemo.com")
  await page.getByPlaceholder("Username").fill("standard_user")
  await page.getByPlaceholder("Password").fill("secret_sauce")
  await page.getByRole("button", { name: "Login" }).click()
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})
