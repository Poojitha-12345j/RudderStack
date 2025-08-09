const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../../src/web/pages/LoginPage");

Given(/^the user navigates to Login Page$/, async () => {
    await LoginPage.openLoginPage();
});
