const { envConfig } = require("../utils/envLoader.js");
const { BaseActions } = require("./base.page.js");
const { LoginLocators } = require("../locators/login.locators.js");
class LoginPage extends BaseActions {
    /**
     * Logs in using credentials from environment configuration.
     * Sets email and password fields, then clicks the login button.
     */
    async login() {
        await this.setValue(LoginLocators.emailInput, envConfig.username);
        await this.setValue(LoginLocators.passwordInput, envConfig.password);
        await this.clickElement(LoginLocators.logInButton);
    }

    /**
     * Opens the login page using the base URL from environment configuration.
     */
    async launchLoginPage() {
        await this.launchUrl(envConfig.baseUrl);
    }

    /**
     * Handles the verification popup if it appears,
     * then navigates to the dashboard by clicking the appropriate buttons.
     */
    async handleVerificationPopupAndNavigateToDashboard() {
        if (await this.isElementDisplayed(LoginLocators.willDoLaterVerificationText, 20000)) {
            await this.clickElement(LoginLocators.willDoLaterVerificationText);
        }

        if (await this.isElementDisplayed(LoginLocators.goToDashBoardButton, 5000)) {
            await this.clickElement(LoginLocators.goToDashBoardButton);
        }
    }
}

module.exports = new LoginPage();
