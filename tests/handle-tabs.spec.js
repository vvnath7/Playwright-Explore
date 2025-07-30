import {test,expect} from '@playwright/test'

test("working on tabs", async ({browser})=>{
    const context = await browser.newContext()
    const page =await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const [newPage] = await Promise.all 
    (
        [
            context.waitForEvent("page"),
            page.locator("(//a[contains(@href,'facebook')])[2]").click()
        ]
    )
    await newPage.waitForTimeout(3000)
    await newPage.locator("(//input[@name='email'])[2]").fill("varun89@live.in")
    await newPage.waitForTimeout(3000)
    await newPage.close()
    await page.locator("#email1").fill("varun89@live.in")
    await page.waitForTimeout(3000)
})