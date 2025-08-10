const { Given } = require("@cucumber/cucumber");
const LoginPage = require("../../pages/login.page.js");

Given(/^the user navigates to Login Page$/, async () => {
    await LoginPage.launchLoginPage();
});
