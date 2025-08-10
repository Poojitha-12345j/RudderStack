const { BaseActions } = require("./base.page.js");
const { DestinationLocators } = require("../locators/destination.locators.js");
class DestinationPage extends BaseActions {
    /**
     * Clicks on the Events tab.
     */
    async goToEventsTab() {
        await this.waitForDisplayed(DestinationLocators.eventTab);
        await this.clickElement(DestinationLocators.eventTab);
    }

    /**
     * Retrieves the count of delivered events.
     */
    async getDeliveredEventCount() {
        await this.waitForDisplayed(DestinationLocators.deliveredCount);
        return parseInt((await this.getText(DestinationLocators.deliveredCount)).trim());
    }

    /**
     * Retrieves the count of failed events.
     */
    async getFailedEventCount() {
        await this.waitForDisplayed(DestinationLocators.failedCount);
        return parseInt((await this.getText(DestinationLocators.failedCount)).trim());
    }
}

module.exports = new DestinationPage();
