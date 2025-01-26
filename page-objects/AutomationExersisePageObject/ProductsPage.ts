import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./PageHelper";



export class ProductPage extends HelperBase {
    readonly viewProduct : Locator
    readonly searchProduct : Locator
    readonly productContainer : Locator
    readonly productOverlay : Locator
    
    constructor(page : Page) {
        super(page)
        this.searchProduct = page.getByRole('textbox', { name: 'Search Product' })
        this.productContainer = this.page.locator('div.productinfo.text-center')
        this.productOverlay = this.page.locator('div.product-overlay')

    }

    async _selectProductByNumber (productNumber : string){
        await this.page.locator(`a[href="/product_details/${productNumber}"]`).click()
        await expect(this.page).toHaveURL(/.*\/product_details\/1/);
    }
    async _verifyProductDetails (
        productName: string, 
        category: string,
        availability: string,
        condition: string,
        brand : string
        ){
        await expect (this.page.getByRole('heading', {name: productName})).toContainText(productName)
        await this._verifyTextByLocatorText('Category:', category);
        await this._verifyTextByLocatorText('Availability', availability);
        await this._verifyTextByLocatorText('Condition', condition);
        await this._verifyTextByLocatorText('Brand:', brand);
    }
  
    async _searchTheProduct(searchWord: string) {
    await this.searchProduct.fill(searchWord);
    await this.page.locator('#submit_search').click();
        const productElements = this.productContainer;
        const count = await productElements.count();
        // Expect the count to be greater than 0
        if (count > 0) {
        console.log(`Number of searched products: ${count}`);
     } else {
        throw new Error('No products found.');
    }
      // Expect all product elements to be visible
      for (let i = 0; i < count; i++) {
        const productElement = productElements.nth(i);
        const isVisible = await productElement.isVisible();
        if (!isVisible) {
            throw new Error(`Product element ${i + 1} is not visible.`);
        }
}
   }



   async _addProductToCart(productName: string, productid : string){
    const productLocator = this.productContainer.locator(`text=${productName}`).first()
    await productLocator.hover()
    const addToCartButton = this.productOverlay.locator(`a[data-product-id="${productid}"]`)
     await addToCartButton.click();
    await this._continueShopping();
   }
   
}