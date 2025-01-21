import {Selector, t} from 'testcafe'

export default class BasePage {
    constructor() {
        this.header = Selector('.page-header')
        this.headerLinks = Selector('header .header.links')
        this.loginButton = Selector('header .authorization-link').child()
        this.greetingsInMessage = Selector('.logged-in')
        this.shopLogo = Selector('.logo');
        this.shoppingCart = Selector('[data-block=minicart]');
        this.proceedToCheckout = Selector('#top-cart-btn-checkout');
    }

    async checkHeaderSectionIsDisplayed() {
        await t.expect(this.header.visible).ok('The header section is not visible')
            .expect(this.headerLinks.visible).ok('The Sign In or Create an Account links are not present')
    }

    async clickOnLoginButton() {
        await t.click(this.loginButton);
    }

    async checkGreetingsMessageIsDisplayed() {
        await t.expect(this.greetingsInMessage.visible).ok('The Greetings message is not visible')
    }

    async clickOnTheShoppingCartButton() {
        await t.click(this.shoppingCart);
    }

    async clickOnTheProceedToCheckout() {
        await t.click(this.proceedToCheckout);
    }
}