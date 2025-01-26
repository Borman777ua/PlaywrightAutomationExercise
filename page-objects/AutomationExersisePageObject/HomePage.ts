import { Page } from "@playwright/test";
import { HelperBase } from "./PageHelper";





export class HomePage extends HelperBase {



 constructor (page: Page){
        super(page)


 }


async _verifySubscription (email){
  await  this.page.locator('#footer').scrollIntoViewIfNeeded()
  await  this._verifyTextByLocatorText("Subscription", "Subscription")
  await  this.page.locator('#susbscribe_email').fill(email)
  await  this.page.locator('#subscribe').click()
  await  this._verifyTextByLocatorText('You have been successfully subscribed!' , 'You have been successfully subscribed!' )
}


}