import { Locator, Page, expect } from "@playwright/test";
import path from "path";
import { HelperBase } from "./PageHelper";

export class ContactUsPage extends HelperBase {

readonly contactFormHeader : Locator
readonly uploadFileButton : Locator
readonly inputName : Locator
readonly inputEmail : Locator 
readonly inputSubject : Locator 
readonly inputText : Locator
readonly submitButton : Locator

    
  constructor (page: Page){
        super(page)
        this.contactFormHeader = page.locator('div.contact-form h2').filter({hasText: "Get In Touch"})
        this.uploadFileButton = page.locator('input[type=file]')
        this.inputName = page.locator('[data-qa="name"]')
        this.inputEmail = page.locator('[data-qa="email"]')
        this.inputSubject = page.locator('[data-qa="subject"]')
        this.inputText = page.locator ('[data-qa="message"]')
        this.submitButton = page.locator('[data-qa="submit-button"]')
  }


  async _createMessage (name : string, email:string, subject:string,text:string){
    const alertText = "Success! Your details have been submitted successfully."
    await expect (this.contactFormHeader).toBeVisible()
    await this._uploadFile('Folder.jpg')
    await this.inputName.fill(name)
    await this.inputEmail.fill(email)
    await this.inputSubject.fill(subject)
    await this.inputText.fill(text)
    await this.submitButton.click({force:true})
    await this._verifyText('div.status alert alert-success', alertText )
  }


 async _uploadFile(fileName: string): Promise<void> {
    const BasePath = path.resolve(process.env.BASE_PATH)

    const filePath = path.join(BasePath, fileName)
    await this.uploadFileButton.setInputFiles(filePath);
}
}
