import {test,expect} from '@playwright/test'

test('My first test ',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('username').pressSequentially('Admin',{delay:200})
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
    await page.waitForTimeout(3000)
})

test.only('Invlaid login ',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('username').pressSequentially('Admin',{delay:200})
    await page.locator('input[name="password"]').fill('admin1234')
    await page.locator('//button[@type="submit"]').click()
    const errorText = await page.locator("//p[contains(@class,'alert-content')]").textContent()
    console.log("Error Messafe is: "+errorText)
    expect (errorText.includes("Invalid")).toBeTruthy()
    expect(errorText==="Invalid credentials").toBeTruthy()
})