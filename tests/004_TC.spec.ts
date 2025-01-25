import { test } from '../test-options'

/*
Test Case 4: Logout User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page
*/



test.describe('Test Case 4: Logout User', ()=>{
    

test('Login and Log out', async({pageManager})=>{
    const navigation = pageManager.NavigateTo() 
    const login = pageManager.LoginPage()
    await navigation._navigateToLogin()
    await login._proseedToLogIn(process.env.testEmail3, process.env.testPassword)
    await navigation._navigateToLogout()
})
})