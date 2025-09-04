import { test, expect } from "@playwright/test"

test("Should load the homepage successfully", async ({ page }) => {
  await page.pause()
  await page.goto("https://playwright.dev/")
  await expect(page).toHaveTitle(/Playwright/)
})
