import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./PageHelper";


export class LoginPage extends HelperBase {
    readonly registrartionHeader : string
    readonly signUpFormHeader : Locator
    readonly signUpButton : Locator
    readonly inputName : Locator
    readonly inputEmail : Locator
    readonly loginHeader : Locator
    readonly loginEmail : Locator
    readonly loginPassword : Locator
    readonly loginButton : Locator
    readonly alert : Locator
 
   

  constructor (page: Page){
        super(page)
        this.registrartionHeader = "New User Signup!"
        this.signUpFormHeader = page.locator('div.signup-form h2').filter({hasText: "New User Signup!"});
        this.signUpButton = page.locator('[data-qa="signup-button"]')
        this.inputName = page.locator('[data-qa="signup-name"]')
        this.inputEmail = page.locator('[data-qa="signup-email"]')
        this.loginHeader = page.locator('div.login-form h2').filter({hasText: "Login to your account" })
        this.loginEmail = page.locator('[data-qa="login-email"]')
        this.loginPassword = page.locator('[data-qa="login-password"]')
        this.loginButton = page.locator('[data-qa="login-button"]')
        this.alert = page.locator('p[style="color: red;"]')
  }
  
  async _proceedToSignUp (email:string, name:string){
    await expect (this.signUpFormHeader).toBeVisible()
    await this.inputName.fill(name)
    await this.inputEmail.fill(email)
    await this.signUpButton.click()
  }
  async _proseedToLogIn (email:string, password:string){
    await expect (this.loginHeader).toBeVisible()
    await this.loginEmail.fill(email)
    await this.loginPassword.fill(password)
    await this.loginButton.click()
  }
  async _verifyAlertMessage (message: string){
    await this._verifyText('p[style="color: red;"]', message)
  }
}