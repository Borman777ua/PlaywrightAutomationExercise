import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./PageHelper";





export class Navigation extends HelperBase {
    
    readonly cartButton: Locator 
    readonly productButton: Locator 
    readonly loginButton: Locator 
    readonly testCasesButton: Locator 
    readonly APITestingButton: Locator 
    readonly videoTutorialsButton: Locator 
    readonly contactUsButton: Locator 
    readonly homeButton: Locator
    readonly videoTutorialsURL : string
    readonly logoutButton : Locator
    readonly deleteAccountButton : Locator
    readonly accountDeletedMessage : Locator 


    
    constructor (page: Page){
        super(page)
        this.cartButton = page.getByRole('link', { name: ' Cart' })
        this.productButton = page.getByRole('link', { name: ' Products' })
        this.loginButton = page.getByRole('link', { name: ' Signup / Login' })
        this.homeButton = page.getByRole('link', { name: ' Home' })
        this.testCasesButton = page.getByRole('link', { name: ' Test Cases' })
        this.APITestingButton = page.getByRole('link', { name: ' API Testing' })
        this.videoTutorialsButton = page.getByRole('link', { name: ' Video Tutorials' })
        this.contactUsButton = page.getByRole('link', { name: ' Contact us' })
        this.videoTutorialsURL = "https://www.youtube.com/c/AutomationExercise"
        this.deleteAccountButton = page.getByRole('link', { name: ' Delete Account' })
        this.logoutButton = page.getByRole('link', { name: ' Logout' })
        this.accountDeletedMessage = page.locator('[data-qa="account-deleted"]').filter({hasText: "Account Deleted!"})
        

    }

async _navigateToHome(){
    await expect (this.homeButton).toContainText(" Home")
    await this.homeButton.click()
    await expect(this.page).toHaveURL('/');
}

async _navigateToProducts(){
    await expect (this.productButton).toContainText(" Products")
    await this.productButton.click()
    await expect(this.page).toHaveURL(/.*\/products/);
}

async _navigateToCart(){
    await expect (this.cartButton).toContainText(" Cart")
    await this.cartButton.click()
    await expect(this.page).toHaveURL(/.*\/view_cart/);
}

async _navigateToLogin(){
    await expect (this.loginButton).toContainText(" Signup / Login")
    await this.loginButton.click()
    await expect(this.page).toHaveURL(/.*\/login/);
}

async _navigateToTestCases(){
    await expect (this.testCasesButton).toContainText(" Test Cases")
    await this.testCasesButton.click()
    await expect(this.page).toHaveURL(/.*\/test_cases/);
}

async _navigateToAPITesting(){
    await expect (this.APITestingButton).toContainText(" API Testing")
    await this.APITestingButton.click()
    await expect(this.page).toHaveURL(/.*\/api_list/);
}

/*async _navigateToVideoTutorials(){
    await expect (this.videoTutorialsButton).toContainText(" Video Tutorials")
    await this.videoTutorialsButton.click()
    await expect(this.page).toHaveURL(this.videoTutorialsURL);
}*/

async _navigateToContactUs(){
    await expect (this.contactUsButton).toContainText(" Contact us")
    await this.contactUsButton.click()
    await expect(this.page).toHaveURL(/.*\/contact_us/);
}
async _navigateToDeleteAccount(){
    await expect (this.deleteAccountButton).toContainText(" Delete Account")
    await this.deleteAccountButton.click()
    await expect(this.page).toHaveURL(/.*\/delete_account/);
    await expect(this.accountDeletedMessage).toBeVisible()
    await this._continueAction()
}
async _navigateToLogout(){
    await expect (this.logoutButton).toContainText("  Logout")
    await this.logoutButton.click()
    await expect(this.page).toHaveURL(/.*\/login/);
}

}