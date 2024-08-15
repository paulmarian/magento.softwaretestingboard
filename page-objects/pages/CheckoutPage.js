import {Selector, t} from 'testcafe'
import BasePage from "./BasePage";
import {
    getRandomAddress,
    getRandomCity,
    getRandomFirstName,
    getRandomLastName,
    getRandomNumber,
    getRandomPhoneNumber,
    getRandomZipCode
} from "../../utils/utilMethods"
import credentials from "../../utils/credentials.json"

class CheckoutPage extends BasePage {
    constructor() {
        super()
        this.progressBar = Selector('.opc-progress-bar')
        this.orderSumary = Selector('#opc-sidebar')
        this.shippingAddress = Selector('#shipping')
        this.shippingMethods = Selector('#opc-shipping_method')
        this.nextButton = Selector('#shipping-method-buttons-container button')
        this.placeOrderButton = Selector('button[title="Place Order"]')
        this.emailField = Selector('#customer-email')
        this.firstNameField = Selector('[name=firstname]')
        this.lastNameField = Selector('[name=lastname]')
        this.addressField = Selector('[name="street[0]"]')
        this.cityField = Selector('[name=city]')
        this.provinceDropDown = Selector('[name=region_id]')
        this.countryDropDown = Selector('[name=country_id]')
        this.postCodeField = Selector('[name=postcode]')
        this.phoneNumberField = Selector('[name=telephone]')
        this.shippingRadioButton = Selector('[type=radio]')
    }

    async checkCheckoutPageIsLoaded() {
        await t.expect(this.progressBar.visible).ok('The checkout page is not shown, progress bar not visible')
        await t.expect(this.orderSumary.visible).ok('The checkout page is not shown, order summary bar not visible')
        await t.expect(this.shippingAddress.visible).ok('The checkout page is not shown, shipping address not visible')
        await t.expect(this.shippingMethods.visible).ok('The checkout page is not shown, shipping methods not visible')
    }

    async goToTheCheckoutPage() {
        await this.clickOnTheShoppingCartButton()
        await this.clickOnTheProceedToCheckout()
        await this.checkCheckoutPageIsLoaded()
    }

    async clickOnNextButton() {
        await t.click(this.nextButton)
    }

    async clickOnPlaceOrderButton() {
        await t.click(this.placeOrderButton())
    }

    async fillAddressDataAndSelectPayment() {
        await t.expect(this.provinceDropDown.visible).ok('Address Field can not be edited')
        let availableProvince = this.provinceDropDown.find('option')
        let availableProvinceLength = await availableProvince.count
        await t.click(this.provinceDropDown)
        await t.click(availableProvince.nth(await getRandomNumber(availableProvinceLength)))
        await t.typeText(this.emailField, credentials.demoAccount.username, {replace: true})
            .typeText(this.firstNameField, getRandomFirstName(), {replace: true})
            .typeText(this.lastNameField, getRandomLastName(), {replace: true})
            .typeText(this.addressField, getRandomAddress(), {replace: true})
            .typeText(this.cityField, getRandomCity(), {replace: true})
            .typeText(this.postCodeField, getRandomZipCode(), {replace: true})
            .typeText(this.phoneNumberField, getRandomPhoneNumber(), {replace: true})
        await t.click(this.shippingRadioButton)
    }
}

export default new CheckoutPage