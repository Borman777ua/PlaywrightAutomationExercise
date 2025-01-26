import { test } from '../test-options'


/*
Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully
*/


test.describe ("Test Case 6: Contact Us Form", ()=>{


test("Contact Us Form" , async ({pageManager}) =>{
        const navigation = pageManager.NavigateTo()  
        const contactUs = pageManager.ContactUsPage()
        await navigation._navigateToContactUs()
        await contactUs._createMessage("Freddie", "123@mail.com","Subject", "Lorem Ipsum")
        await contactUs._verifyMessageBox()
        await contactUs._goToHome()
})
})