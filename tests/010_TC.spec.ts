
import { test } from '../test-options'

/*
Test Case 10: Verify Subscription in home page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible
*/

test.describe("Test Case 10: Verify Subscription in home page", ()=>{


test ("Verify footer subscription",async ({pageManager}) => {
   const  HomePage = pageManager.HomePage()
    await HomePage._verifySubscription("123@mail.com")
})
})