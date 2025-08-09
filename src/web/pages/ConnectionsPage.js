const { BaseActions } = require("../pages/BaseActionsPage.js");
class ConnectionsPage extends BaseActions {
    get dataPlaneUrl() {
        return $("//span[text()='Data Plane']//following-sibling::div//span");
    }

    get writeKey() {
        return $("//span[contains(text(),'Write key')]");
    }

    get webhookDestination() {
        return `//*[text()="$$$"]`;
    }

    /**
     * Waits for the data plane URL element to be displayed,
     * then returns its text content.
     */
    async getDataPlaneUrl() {
        await this.dataPlaneUrl.waitForDisplayed();
        return await this.dataPlaneUrl.getText();
    }

    /**
     * Waits for the write key element to be displayed,
     * then returns the third word from its text content.
     */
    async getWriteKey() {
        await this.writeKey.waitForDisplayed();
        return (await this.writeKey.getText()).split(" ")[2];
    }

    /**
     * Opens the webhook destination by dynamically replacing
     * a part of the locator value and clicking the resulting element.
     */
    async openWebhookDestination() {
        const destination = await $(
            await this.replaceTheLocatorValue(this.webhookDestination, "automation-destination")
        );
        await destination.waitForDisplayed();
        await destination.click();
    }
}

module.exports = new ConnectionsPage();
