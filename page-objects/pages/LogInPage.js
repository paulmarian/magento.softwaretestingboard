import { Selector , t } from 'testcafe'
import BasePage from "./BasePage";

class LogInPage  extends BasePage{
    constructor() {
        super()
        this.email = Selector('#email')
        this.password = Selector('#pass')
        this.signInButton = Selector('#send2');
        this.loginPageText = Selector('[data-ui-id=page-title-wrapper]');
    }

    async checkLoginPageIsDisplayed(loginPageText) {
        await t.expect(this.loginPageText.visible).ok('The header section is not visible')
               .expect(this.loginPageText.innerText).contains(loginPageText)
    }

    async signIn(username,password) {
        await t
            .typeText(this.email,username)
            .typeText(this.password,password)
            .click(this.signInButton)
    }
}

export default new LogInPage