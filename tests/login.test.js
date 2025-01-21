import LogInPage from "../page-objects/pages/LogInPage";
import constants from "../utils/constants"
import credentials from "../utils/credentials.json"
import HomePage from "../page-objects/pages/HomePage";

fixture.meta('suite','login')
    `Check login`
    .page(constants.APP_URL)
    .beforeEach( async t => {
        await t.maximizeWindow()
    });

test('Successful Log In', async () => {
    await HomePage.checkHeaderSectionIsDisplayed()
    await HomePage.checkHomePageIsDisplayed()
    await HomePage.clickOnLoginButton()
    await LogInPage.checkLoginPageIsDisplayed(constants.LOGIN_PAGE_TITLE)
    await LogInPage.signIn(credentials.demoAccount.username, credentials.demoAccount.password)
    await HomePage.checkGreetingsMessageIsDisplayed()
    await HomePage.checkHomePageIsDisplayed()
});