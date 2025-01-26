import { Page, expect } from "@playwright/test";
import { HelperBase } from "./PageHelper";

export class CartPage extends HelperBase {
 
 
    constructor (page: Page){
        super(page)



 }

async _verifyCartTable(productName: string, productPrice: string, productQuantity: string, totalPrice: string) {
    const productRow = this.page.locator('tbody tr').filter({hasText : productName})

        const rowCount = await productRow.count();
    if (rowCount === 0) {
        throw new Error(`Product with name "${productName}" not found in the cart table.`);
    }
    await expect(productRow).toContainText(productName); 
    await expect(productRow).toContainText(productPrice); 
    await expect(productRow).toContainText(productQuantity); 
    await expect(productRow).toContainText(totalPrice); 
}

}