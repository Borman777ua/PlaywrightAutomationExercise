import { Page } from "@playwright/test"
import { ContactUsPage } from "./ContactUsPage"
import { LoginPage } from "./LoginPage"
import { Navigation } from "./Navigation"
import { ProductPage } from "./ProductsPage"
import { SignUpPage } from "./SignUpPage"


export class PageManager {
    private readonly page : Page 
    private readonly navigation : Navigation
    private readonly loginPage : LoginPage
    private readonly signUpPage : SignUpPage
    private readonly contactUsPage : ContactUsPage
    private readonly productPage : ProductPage 



 constructor (page : Page) {
   this.page = page
   this.navigation = new Navigation(this.page)
   this.loginPage = new LoginPage (this.page)
   this.signUpPage = new SignUpPage (this.page)
   this.contactUsPage = new ContactUsPage(this.page)
   this.productPage = new ProductPage(this.page)
 }


 NavigateTo (){
    return this.navigation
 }

 LoginPage(){
    return this.loginPage
 }

 SignUpPage (){
    return this.signUpPage
 }
 ContactUsPage(){
   return this.contactUsPage 
 }
 ProductPage (){
   return this.productPage
 }
}