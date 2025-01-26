import { test } from '../test-options'

/*
Test Case 12: Add Products in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price
*/


test.describe ("Test Case 12: Add Products in Cart", ()=>{
 
 
    test('Add Products in Cart', async({pageManager})=>{
            await  pageManager.NavigateTo()._navigateToProducts()
            await pageManager.ProductPage()._addProductToCart("Stylish Dress","4" )
            await pageManager.ProductPage()._addProductToCart("Winter Top","5" )
           await pageManager.NavigateTo()._navigateToCart()
            await pageManager.CartPage()._verifyCartTable(
            "Stylish Dress", 
            "Rs. 1500",
            "1",
            "Rs. 1500")
         await pageManager.CartPage()._verifyCartTable(
            "Winter Top",
            "Rs. 600",
            "1",
            "Rs. 600"
         )
 })
})