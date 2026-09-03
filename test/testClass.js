export class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator('[name="user-name"]');
        this.password = page.locator('[name="password"]');
        this.logInBtn = page.locator('[name="login-button"]');
        this.url = page.goto('https://www.saucedemo.com/');


    }
    
    async visitUrl(){
       await this.url; 
    }

    async logIn(user,pass){
       await this.username.fill(user);
       await this.password.fill(pass);
       await this.logInBtn.click();
    }
}