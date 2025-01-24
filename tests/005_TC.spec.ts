import { test } from "@playwright/test"
import { PageManager } from "../page-objects/AutomationExersisePageObject/PageObjectManager"


/*
Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible
*/

test.describe('Test Case 5: Register User with existing email', ()=>{
    
    
    test.beforeEach (async({page}) =>{
    const pm = new PageManager(page)
    const navigation = pm.NavigateTo() 
    await page.goto('/')
    await navigation._handleWithCookies()
})

    test("Register existing user", async ({page})=>{
       const pm = new PageManager(page)
       const navigation = pm.NavigateTo()
       const login = pm.LoginPage()
       const alert = "Email Address already exist!"
       await navigation._navigateToLogin()
       await login._proceedToSignUp(process.env.testEmail3, process.env.testPassword)
       await login._verifyAlertMessage(alert)
    })


})