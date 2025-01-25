import { test } from '../test-options'


/*
Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible
*/


test.describe.serial('Test Case 2: Login User with correct email and password', ()=> {
    test("Step 1: Register a new User", async ({pageManager})=>{
    const userName = process.env.testName2
    const navigation = pageManager.NavigateTo() 
    const login = pageManager.LoginPage()
    const registration = pageManager.SignUpPage()
    await navigation._navigateToLogin()
    await login._proceedToSignUp(process.env.testEmail2,process.env.testName2)
    await registration._userRegistration(userName)

})


test("Step 2 : Login with Valid email and password", async ({pageManager})=>{
        const navigation = pageManager.NavigateTo() 
        const login = pageManager.LoginPage()
        await navigation._navigateToLogin()
        await login._proseedToLogIn(process.env.testEmail2,process.env.testPassword)
        await navigation._checkUserIsLoggedIn(process.env.testName2)
        await navigation._navigateToDeleteAccount()
})
})