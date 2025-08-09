const { envConfig } = require("../../../utils/envLoader");
const { BaseActions } = require("../pages/BaseActionsPage.js");
class LoginPage extends BaseActions {
    get inputEmail() {
        return $("#text-input-email");
    }

    get inputPassword() {
        return $("#text-input-password");
    }

    get loginButton() {
        return $("//span[text()='Log in']");
    }

    get willDoLaterVerificationText() {
        return $("//a[contains(text(),'do this later')]");
    }

    get goToDashBoardButton() {
        return $("//span[text()='Go to dashboard']");
    }

    /**
     * Logs in using credentials from environment configuration.
     * Sets email and password fields, then clicks the login button.
     */
    async login() {
        await this.setValue(this.inputEmail, envConfig.username);
        await this.setValue(this.inputPassword, envConfig.password);
        await this.loginButton.click();
    }

    /**
     * Opens the login page using the base URL from environment configuration.
     */
    async openLoginPage() {
        await this.launchUrl(envConfig.baseUrl);
    }

    /**
     * Handles the verification popup if it appears,
     * then navigates to the dashboard by clicking the appropriate buttons.
     */
    async handleVerificationPopupAndNavigateToDashboard() {
        if (await this.willDoLaterVerificationText.waitForDisplayed({ timeout: 20000 })) {
            await this.willDoLaterVerificationText.click();
        }

        if (await this.goToDashBoardButton.isDisplayed({ timeout: 5000 })) {
            await this.goToDashBoardButton.click();
        }
    }
}

module.exports = new LoginPage();
