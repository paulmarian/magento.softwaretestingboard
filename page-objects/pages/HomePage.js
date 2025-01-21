import { Selector ,t } from 'testcafe'
import {getRandomNumber} from "../../utils/utilMethods"
import BasePage from "./BasePage";
import ShopPage from "./ShopPage";
import ProductDetailsPage from "./ProductDetailsPage";

class HomePage extends BasePage{
    constructor() {
        super()
        this.womenSection = Selector('#ui-id-4');
        this.menSection = Selector('#ui-id-5') ;
        this.gearSection = Selector('#ui-id-6');
    }

    async checkHomePageIsDisplayed() {
        await t.expect(this.shopLogo.visible).ok('The shop logo is not displayed')
               .expect(this.shoppingCart.visible).ok('The shopping cart icon is not displayed')
    }

    async selectRandomProductFromSubCategory(specificSectionSelector) {
        let submenuItemsElement = specificSectionSelector.sibling()
        let sectionSubElementsCount = await submenuItemsElement.childNodeCount
        let elementToClickOn = await getRandomNumber(sectionSubElementsCount)
        await t.hover(specificSectionSelector.parent())
        await t.click(submenuItemsElement.child(elementToClickOn))
        await ShopPage.clickOnARandomProduct()
        await ProductDetailsPage.checkProductDetailsPageIsLoaded()
    }

}

export default new HomePage();