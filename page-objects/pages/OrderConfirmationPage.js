import {Selector, t} from 'testcafe'
import BasePage from "./BasePage";

class OrderConfirmationPage extends BasePage {
    constructor() {
        super()
        this.orderConfirmationTitle = Selector('[data-ui-id=page-title-wrapper]')
        this.orderNumber = Selector('.order-number, .checkout-success span')
        this.continueShoppingButton = Selector('.action.primary.continue')
    }

    async checkOrderIsSuccessfullyPlaced(orderConfirmationPageText) {
        await t.expect(this.orderConfirmationTitle.visible).ok('The order confirmation page title is not displayed')
            .expect(this.orderNumber.visible).ok('The order confirmation page order number is not displayed')
            .expect(this.continueShoppingButton.visible).ok('The order confirmation page back to shop button is not displayed')
            .expect(this.orderConfirmationTitle.innerText).contains(orderConfirmationPageText)
    }
}

export default new OrderConfirmationPage