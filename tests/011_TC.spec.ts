
import { test } from '../test-options'

/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible
*/

test.describe("Test Case 11: Verify Subscription in Cart page", ()=>{


test ("Verify footer subscription",async ({pageManager}) => {
    await pageManager.NavigateTo()._navigateToCart()
    await pageManager.HomePage()._verifySubscription("123@mail.com")
})
})