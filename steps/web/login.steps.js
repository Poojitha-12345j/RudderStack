const { When } = require("@cucumber/cucumber");
const LoginPage = require("../../pages/login.page.js");

When(/^the user logs in with valid credentials$/, async () => {
    await LoginPage.login();
    await LoginPage.handleVerificationPopupAndNavigateToDashboard();
});
