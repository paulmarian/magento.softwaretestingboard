import constants from "../utils/constants"
import credentials from "../utils/credentials.json"
import HomePage from "../page-objects/pages/HomePage";
import ProductDetailsPage from "../page-objects/pages/ProductDetailsPage";
import CheckoutPage from "../page-objects/pages/CheckoutPage";
import LogInPage from "../page-objects/pages/LogInPage";
import OrderConfirmationPage from "../page-objects/pages/OrderConfirmationPage";

fixture.meta('suite', 'purchaseWithUser')
    `Purchase with logged in user`
    .page(constants.APP_URL)
    .beforeEach(async t => {
        await t.maximizeWindow()
        await HomePage.checkHomePageIsDisplayed()
        await HomePage.clickOnLoginButton()
        await LogInPage.signIn(credentials.demoAccount.username, credentials.demoAccount.password)
        await HomePage.checkGreetingsMessageIsDisplayed()
    });

test('Successful purchase from the women section with a logged in user', async () => {
    await HomePage.selectRandomProductFromSubCategory(HomePage.womenSection)
    await ProductDetailsPage.selectRandomClothingDetails()
    await ProductDetailsPage.addTheProductToTheCart()
    await CheckoutPage.goToTheCheckoutPage()
    await CheckoutPage.clickOnNextButton()
    await CheckoutPage.clickOnPlaceOrderButton()
    await OrderConfirmationPage.checkOrderIsSuccessfullyPlaced(constants.ORDER_CONFIRMATION_MESSAGE)
});

test('Successful purchase from the men section with a logged in user', async () => {
    await HomePage.selectRandomProductFromSubCategory(HomePage.menSection())
    await ProductDetailsPage.selectRandomClothingDetails()
    await ProductDetailsPage.addTheProductToTheCart()
    await CheckoutPage.goToTheCheckoutPage()
    await CheckoutPage.clickOnNextButton()
    await CheckoutPage.clickOnPlaceOrderButton()
    await OrderConfirmationPage.checkOrderIsSuccessfullyPlaced(constants.ORDER_CONFIRMATION_MESSAGE)
});

test('Successful purchase from the gears section with a logged in user', async () => {
    await HomePage.selectRandomProductFromSubCategory(HomePage.gearSection())
    await ProductDetailsPage.selectRandomGearDetails()
    await ProductDetailsPage.addTheProductToTheCart()
    await CheckoutPage.goToTheCheckoutPage()
    await CheckoutPage.clickOnNextButton()
    await CheckoutPage.clickOnPlaceOrderButton()
    await OrderConfirmationPage.checkOrderIsSuccessfullyPlaced(constants.ORDER_CONFIRMATION_MESSAGE)
});