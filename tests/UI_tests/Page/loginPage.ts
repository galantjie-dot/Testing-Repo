import { Locator,Page } from "@playwright/test";


export class LoginPage{
    protected page: Page;
    readonly my_account_Btn: Locator;
    readonly email_box: Locator;
    readonly password_box: Locator;
    readonly submit_Btn: Locator;

    constructor(page: Page){
        this.page = page;
        this.my_account_Btn = page.getByRole('button', { name: 'My Account' });
        this.email_box = page.getByPlaceholder('E-Mail Address');
        this.password_box = page.getByPlaceholder('Password');
        this.submit_Btn = page.locator('input[value="Login"]');
    }

    async navigateToURL(url: string){
        await this.page.goto(url)
    }
    async clickMyAccount(){
        await this.my_account_Btn.click();
    }
    async enterEmail(email: string){
        await this.email_box.fill(email);
    }
    async enterPassword(password: string){
        await this.password_box.fill(password);
    }   
    async clickSubmit(){
        await this.submit_Btn.click();
    }   

}