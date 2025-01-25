import { test } from '../test-options'

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
    

    test("Register existing user", async ({pageManager})=>{
       const navigation = pageManager.NavigateTo()
       const login = pageManager.LoginPage()
       const alert = "Email Address already exist!"
       await navigation._navigateToLogin()
       await login._proceedToSignUp(process.env.testEmail3, process.env.testPassword)
       await login._verifyAlertMessage(alert)
    })


})