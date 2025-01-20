import { test } from '@playwright/test'
import { PageManager } from '../page-objects/AutomationExersisePageObject/PageObjectManager'


test.beforeEach (async({page}) =>{
await page.goto('/')
})

test('Navigation',async ({page}) => {
    const pm = new PageManager(page)
    const navigation = pm.NavigateTo()
    await  navigation._handleWithCookies()
    await navigation._navigateToProducts()
    await navigation._navigateToCart()
    await navigation._navigateToLogin()
    await navigation._navigateToTestCases()
    await navigation._navigateToAPITesting()
    await navigation._navigateToContactUs()
    await navigation._navigateToHome()
})