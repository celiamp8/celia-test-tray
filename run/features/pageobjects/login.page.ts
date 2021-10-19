import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#user-name') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('input[data-test="login-button"]') }


    async login() {
        const defaultUsername: string = 'standard_user';
        const defaultPassword: string = 'secret_sauce';

        await this.inputUsername.setValue(defaultUsername);
        await this.inputPassword.setValue(defaultPassword);
        await this.btnSubmit.click();
    }

    open() {
        return browser.url('https://www.saucedemo.com/');
    }
}

export default new LoginPage();
