const { When } = require("@cucumber/cucumber");
const LoginPage = require("../../../src/web/pages/LoginPage");

When(/^the user logs in with valid credentials$/, async () => {
    await LoginPage.login();
    await LoginPage.handleVerificationPopupAndNavigateToDashboard();
});
