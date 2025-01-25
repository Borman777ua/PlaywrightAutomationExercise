
import { test } from '../test-options'

/*
Test Case 7: Verify Test Cases Page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/

test.describe ("Test Case 7: Verify Test Cases Page", ()=>{

    test('Navigation',async ({pageManager}) => {
    const navigation = pageManager.NavigateTo()
    await navigation._navigateToTestCases()
    })
})