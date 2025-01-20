import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./PageHelper";


export class SignUpPage extends HelperBase {
    readonly titleLabel : Locator
    readonly inputPassword : Locator
    readonly selectDay :Locator
    readonly selectMonth :Locator
    readonly selectYear :Locator
    readonly loginFormHeader : Locator
    readonly newsletterCheckbox : Locator
    readonly specialOffersCheckbox : Locator
    readonly createAccountButton : Locator
    readonly firstNameInput : Locator 
    readonly lastNameInput : Locator 
    readonly companyInput : Locator 
    readonly addressInput : Locator 
    readonly countrySelector : Locator
    readonly stateInput : Locator 
    readonly cityInput : Locator 
    readonly zipCodeInput: Locator
    readonly mobileNumberInput : Locator
    readonly accountCreatedMessage : Locator


constructor(page : Page) {
    super(page)

        this.titleLabel = page.getByLabel('Mr.')
        this.inputPassword = page.locator('[data-qa="password"]')
        this.selectDay = page.locator('[data-qa="days"]')
        this.selectMonth = page.locator('[data-qa="months"]')
        this.selectYear = page.locator('[data-qa="years"]')
        this.loginFormHeader = page.locator('div.login-form h2').filter({hasText: 'Enter Account Information' })
        this.newsletterCheckbox = page.getByRole("checkbox",({name: "Sign up for our newsletter!"}))
        this.specialOffersCheckbox = page.getByRole("checkbox",({name: "Receive special offers from our partners!"}))
        this.createAccountButton = page.locator('[data-qa="create-account"]')
        this.firstNameInput = page.locator('[data-qa="first_name"]')
        this.lastNameInput = page.locator('[data-qa="last_name"]')
        this.companyInput = page.locator('[data-qa="company"]')
        this.addressInput = page.locator('[data-qa="address"]')
        this.countrySelector = page.locator('[data-qa="country"]')
        this.stateInput = page.locator('[data-qa="state"]')
        this.cityInput = page.locator('[data-qa="city"]')
        this.zipCodeInput = page.locator('[data-qa="zipcode"]')
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]')  
        this.accountCreatedMessage = page.locator('[data-qa="account-created"]') 
}


    async _userRegistration(){
    await expect (this.loginFormHeader).toBeVisible()
    await this.titleLabel.check({force: true})
    await this.inputPassword.fill(process.env.testPassword)
    await this._selectdayOfBirth ("5","June","1995")
    await this.newsletterCheckbox.check({force: true})
    await this.specialOffersCheckbox.check({force: true})
    await this._inputAddressInformation()
    await this.createAccountButton.click()
    await expect(this.accountCreatedMessage).toHaveText("Account Created!")
    await expect(this.accountCreatedMessage).toBeVisible()
    await this._continueAction()
  }

    async _selectdayOfBirth (day: string, month: string, year : string){
    await this.selectDay.selectOption(day)
    await this.selectMonth.selectOption(month)
    await this.selectYear.selectOption(year)
    
  }

  async _inputAddressInformation(){
    await this.firstNameInput.fill(process.env.testFirstName)
    await this.lastNameInput.fill(process.env.testLastName)
    await this.addressInput.fill(process.env.testStreet)
    await this.countrySelector.selectOption(process.env.testCountry)
    await this.stateInput.fill(process.env.testState)
    await this.cityInput.fill(process.env.testCity)
    await this.zipCodeInput.fill(process.env.testZipCode)
    await this.mobileNumberInput.fill(process.env.testMobileNumber)
  }



}