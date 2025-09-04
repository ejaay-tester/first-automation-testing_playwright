import { test, expect } from "@playwright/test"

test("[PROJ-T1] should load the homepage successfully", async ({ page }) => {
  await page.pause()
  await page.goto("https://playwright.dev/")
  await expect(page).toHaveTitle(/Playwright/)
})
