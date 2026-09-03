import { test, expect } from "@playwright/test";
import { users } from "./users.js";
import { LoginPage } from "./testClass.js";

users.forEach(({ username , password })=>{
    let useT;
    test.beforeEach(async({ page })=>{

        useT = new LoginPage( page );
        await useT.visitUrl();  
     })

    test(`Sauce Demo login with ${ username }`, async ({ page }) => {
        await useT.logIn( username , password );
        
        if (!/inventory/i.test(page.url()) && username === 'locked_out_user') {
            await page.screenshot({path:`${ username }.jpg`});
            await expect(page.locator('//h3[@data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        }else{
          await expect(page).toHaveURL(/inventory/i);
        }
        
    })
})