import {Selector, t} from 'testcafe'
import {getRandomNumber} from "../../utils/utilMethods";
import BasePage from "./BasePage";

class ShopPage  extends BasePage{
    constructor() {
        super()
        this.productTile = Selector('.product-image-container')
    }

    async clickOnARandomProduct() {
        let productsCount = await this.productTile.count
        let elementToClickOn = await getRandomNumber(productsCount)
        await t.click(this.productTile.nth(elementToClickOn))
    }
}

export default new ShopPage