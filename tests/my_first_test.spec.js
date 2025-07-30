import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login'
test("Login Test ", async ({ page }) => {
  const Login = new LoginPage(page)
  await page.goto('https://www.saucedemo.com/')
  await Login.login("standard_user", "secret_sauce")
  await page.waitForURL('https://www.saucedemo.com/inventory.html')
})

// test('@smoke Add to Cart Test', async ({ page }) => {
//     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     await page.locator('[data-test="item-0-title-link"]').click();
//     await page.locator('[data-test="add-to-cart"]').click();
//   })

//   test('Logout Test', async ({ page }) => {
//     await page.getByRole('button', { name: 'Open Menu' }).click();
//     await page.locator('[data-test="logout-sidebar-link"]').click();
//   })

