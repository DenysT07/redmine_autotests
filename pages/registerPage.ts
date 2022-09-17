import { Page } from "@playwright/test"
export default class RegisterPage{

    constructor (public page: Page){
        

    }
    
   async enterNickName(value){
   await this.page.locator('[id="user_login"]').type(value)

    }
    async enterPasswordAndConfirmPassword(){
        const randomstring = Math.random().toString(36).substring(2);
       await this.page.locator('[id="user_password"]').type(randomstring)
       await this.page.locator('[id="user_password_confirmation"]').type(randomstring)
    
        }
    async enterFirstName(value){
   await this.page.locator('[id="user_firstname"]').type(value)

    }
    async enterLastName(value){
   await this.page.locator('[id="user_lastname"]').type(value)

    }
    async enterEmail(value){
   await this.page.locator('[id="user_mail"]').type(value + "@gmail.com") 
    }  

   async selectUserLanguage(value) {
    await this.page.locator('[id="user_language"]').selectOption(value);   
}
   async clickCommitButton() {
    await this.page.locator('[name="commit"]').click();   
}
async getNotificationLoc() {
    return await this.page.locator('[class="flash notice"]')
}

}
