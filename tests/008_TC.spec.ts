import { test } from "@playwright/test"
import { PageManager } from "../page-objects/AutomationExersisePageObject/PageObjectManager"

/*
Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
*/

test.describe ("Test Case 8: Verify All Products and product detail page", ()=>{
        
    test.beforeEach (async({page}) =>{
    const pm = new PageManager(page)
    const navigation = pm.NavigateTo() 
    await page.goto('/')
    await navigation._handleWithCookies()
})


    test("Verify Products and Product Detail", async({page})=>{
            const pm = new PageManager(page)
            const navigation = pm.NavigateTo()
            const productPage = pm.ProductPage()
            await  navigation._navigateToProducts()
            await  productPage._selectProductByNumber("1")
    })



})