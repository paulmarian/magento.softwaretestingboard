import {Selector, t} from 'testcafe'
import {getRandomNumber} from "../../utils/utilMethods";
import BasePage from "./BasePage";

class ProductDetailsPage extends BasePage {
    constructor() {
        super()
        this.productImage = Selector('.fotorama__stage')
        this.addToCartButton = Selector('#product-addtocart-button')
        this.productInfoSection = Selector('.product-info-main')
        this.productColorOptions = Selector('div[id^=option-label-color-]')
        this.productSizeOptions = Selector('div[id^=option-label-size-]')
        this.succesMessage = Selector('.page.messages')
        this.quantityField = Selector('#qty, [title=Qty]')
        this.customizeButton = Selector('#bundle-slide')
    }

    async checkProductDetailsPageIsLoaded() {
        await t.expect(this.productImage.visible).ok('The product image on the product details page is not shown')
            .expect(this.productInfoSection.visible).ok('The Add to Cart button is not shown')
    }

    async addTheProductToTheCart() {
        await t.click(this.addToCartButton())
        await t.expect(this.succesMessage.visible).ok('The product successfully added to cart message is not shown')
    }

    async selectRandomAttribute(specificSelector) {
        let attributeVariantsCount = await specificSelector.count
        let elementToClickOn = await getRandomNumber(attributeVariantsCount)
        await t.click(specificSelector.nth(elementToClickOn))
    }

    async selectRandomClothingDetails() {
        let quantity = (await getRandomNumber(9) + 1).toString()
        await this.selectRandomAttribute(this.productSizeOptions)
        await this.selectRandomAttribute(this.productColorOptions)
        await t.typeText(this.quantityField, quantity, {replace: true})
    }

    async selectRandomGearDetails() {
        if (await this.customizeButton.exists){
            await t.click(this.customizeButton)
        }
        let quantityFieldCount = await this.quantityField.count
        for (let i = 0; i < quantityFieldCount; i++){
            let quantity = (await getRandomNumber(9) + 1).toString()
            await t.typeText(this.quantityField.nth(i), quantity, {replace: true})
        }
    }
}

export default new ProductDetailsPage