import constants from "../utils/constants"
import HomePage from "../page-objects/pages/HomePage";
import ProductDetailsPage from "../page-objects/pages/ProductDetailsPage";
import CheckoutPage from "../page-objects/pages/CheckoutPage";
import OrderConfirmationPage from "../page-objects/pages/OrderConfirmationPage";
import checkoutPage from "../page-objects/pages/CheckoutPage";

fixture.meta('suite', 'purchaseAsGuest')
    `Purchase as guest user`
    .page(constants.APP_URL)
    .beforeEach(async t => {
        await t.maximizeWindow()
        await HomePage.checkHomePageIsDisplayed()
    });

test('Successful purchase from the women section as guest user', async () => {
    await HomePage.selectRandomProductFromSubCategory(HomePage.womenSection)
    await ProductDetailsPage.selectRandomClothingDetails()
    await ProductDetailsPage.addTheProductToTheCart()
    await CheckoutPage.goToTheCheckoutPage()
    await checkoutPage.fillAddressDataAndSelectPayment()
    await CheckoutPage.clickOnNextButton()
    await CheckoutPage.clickOnPlaceOrderButton()
    await OrderConfirmationPage.checkOrderIsSuccessfullyPlaced(constants.ORDER_CONFIRMATION_MESSAGE)
});

test('Successful purchase from the men section as guest user', async () => {
    await HomePage.selectRandomProductFromSubCategory(HomePage.menSection())
    await ProductDetailsPage.selectRandomClothingDetails()
    await ProductDetailsPage.addTheProductToTheCart()
    await CheckoutPage.goToTheCheckoutPage()
    await checkoutPage.fillAddressDataAndSelectPayment()
    await CheckoutPage.clickOnNextButton()
    await CheckoutPage.clickOnPlaceOrderButton()
    await OrderConfirmationPage.checkOrderIsSuccessfullyPlaced(constants.ORDER_CONFIRMATION_MESSAGE)
});

test('Successful purchase from the gears section as guest user', async () => {
    await HomePage.selectRandomProductFromSubCategory(HomePage.gearSection())
    await ProductDetailsPage.selectRandomGearDetails()
    await ProductDetailsPage.addTheProductToTheCart()
    await CheckoutPage.goToTheCheckoutPage()
    await checkoutPage.fillAddressDataAndSelectPayment()
    await CheckoutPage.clickOnNextButton()
    await CheckoutPage.clickOnPlaceOrderButton()
    await OrderConfirmationPage.checkOrderIsSuccessfullyPlaced(constants.ORDER_CONFIRMATION_MESSAGE)
});