const { BaseActions } = require("./base.page.js");
const { ConnectionsLocators } = require("../locators/connections.locators.js");
const path = require("path");
const destinations = require(path.resolve(__dirname, "../testdata/destinations.json"));

class ConnectionsPage extends BaseActions {
    /**
     * Waits for the data plane URL element to be displayed,
     * then returns its text content.
     */
    async getDataPlaneUrl() {
        await this.waitForDisplayed(ConnectionsLocators.dataPlaneUrlText);
        return await this.getText(ConnectionsLocators.dataPlaneUrlText);
    }

    /**
     * Waits for the write key element to be displayed,
     * then returns the third word from its text content.
     */
    async getWriteKey() {
        await this.waitForDisplayed(ConnectionsLocators.writekeyText);
        return (await this.getText(ConnectionsLocators.writekeyText)).split(" ")[2];
    }

    /**
     * Opens the webhook destination by dynamically replacing
     * a part of the locator value and clicking the resulting element.
     */
    async openWebhookDestination(destinationKey = "automation-destination") {
        const destination = await this.replaceTheLocatorValue(
            ConnectionsLocators.webhookDestination,
            destinations[destinationKey]
        );
        await this.waitForDisplayed(destination);
        await this.clickElement(destination);
    }
}

module.exports = new ConnectionsPage();
