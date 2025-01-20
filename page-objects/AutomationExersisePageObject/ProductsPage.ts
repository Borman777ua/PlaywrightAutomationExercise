import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./PageHelper";



export class ProductPage extends HelperBase {
    readonly viewProduct : Locator
    
    
    constructor(page : Page) {
        super(page)
    }

    async _selectProductByNumber (productNumber : string){
        await this.page.locator(`a[href="/product_details/${productNumber}"]`).click()
        await expect(this.page).toHaveURL(/.*\/product_details\/1/);
    }
    async _verifyProductDetails (){
         this._verifyText('div.product-information h2', "Blue Top" )
    }

}
