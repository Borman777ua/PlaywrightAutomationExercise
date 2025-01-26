import { test } from '../test-options'
/*
Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible
*/

test.describe('Test Case 3: Login User with incorrect email and password', ()=>{

    test("Login User with invalid Email", async ({pageManager})=>{
       const navigation = pageManager.NavigateTo()
       const login = pageManager.LoginPage()
       const alert = "Your email or password is incorrect!"
       await navigation._navigateToLogin()
       await login._proseedToLogIn("invalidEmail@mail.com", process.env.testPassword)
       await login._verifyAlertMessage(alert)
    })

        test("Login User with invalid password", async ({pageManager})=>{
       const navigation = pageManager.NavigateTo()
       const login = pageManager.LoginPage()
       const alert = "Your email or password is incorrect!"
       await navigation._navigateToLogin()
       await login._proseedToLogIn("invalidEmail@mail.com", process.env.invalidTestPassword)
       await login._verifyAlertMessage(alert)
    })
})