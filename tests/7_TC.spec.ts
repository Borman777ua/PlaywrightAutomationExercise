import { test } from "@playwright/test"
import { PageManager } from "../page-objects/AutomationExersisePageObject/PageObjectManager"

/*
Test Case 7: Verify Test Cases Page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully
*/

test.describe ("Test Case 7: Verify Test Cases Page", ()=>{
        
    test.beforeEach (async({page}) =>{
    const pm = new PageManager(page)
    const navigation = pm.NavigateTo() 
    await page.goto('/')
    await navigation._handleWithCookies()
})

    test('Navigation',async ({page}) => {
    const pm = new PageManager(page)
    const navigation = pm.NavigateTo()
    await navigation._navigateToTestCases()
    })
})