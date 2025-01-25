import { Locator, Page, expect } from "@playwright/test";


export class HelperBase {
    readonly page : Page 
    readonly continueButton : Locator
    readonly userNameLoggedIn : Locator 
    readonly goToHomeButton

    constructor (page: Page){
    this.page = page 
    this.continueButton = page.locator('a', {hasText: "Continue"})
    this.goToHomeButton = page.locator('a.btn.btn-success')
}

async _handleWithCookies(){
    if (process.env.CI) {
        return;
    }
    await this.page.getByLabel('Consent', { exact: true }).click();
}

async _waitForNumberOfSeconds(timeInSeconds: number){
await this.page.waitForTimeout(timeInSeconds * 1000)
}

async _continueAction(){
  await this.continueButton.click()
}
async _checkUserIsLoggedIn(userName: string){
    await expect (this.page.locator('a').filter({hasText:  ` Logged in as ${userName}`})).toBeVisible()
}

async _verifyText(locator : string, text : string){
   await expect (this.page.locator(locator)).toHaveText(text)
}

async _goToHome (){
    await this.goToHomeButton.click()
    await expect(this.page).toHaveURL('/');
}

async _handleWithSingleDialog() {
  this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await this.page.getByRole('button', { name: 'Submit' }).click();
}

async toggleElement(locator: Locator, desiredState: boolean = true): Promise<void> {
  await locator.waitFor({ state: 'visible' });
  const isChecked = await locator.isChecked();
  if (isChecked !== desiredState) {
    await locator.check({ force: true });
  }
}

}


