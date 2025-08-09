const { BaseActions } = require("../pages/BaseActionsPage.js");
class DestinationPage extends BaseActions {
    get eventsTab() {
        return $("[data-node-key='Events']");
    }

    get deliveredCount() {
        return $("//span[text()='Delivered']//following-sibling::div//span");
    }

    get failedCount() {
        return $("//span[text()='Failed']//following-sibling::div//span");
    }

    /**
     * Clicks on the Events tab.
     */
    async goToEventsTab() {
        await this.eventsTab.waitForDisplayed();
        await this.eventsTab.click();
    }

    /**
     * Retrieves the count of delivered events.
     */
    async getDeliveredEventCount() {
        await this.deliveredCount.waitForDisplayed();
        const delivered = await this.deliveredCount.getText();
        return parseInt(delivered.trim());
    }

    /**
     * Retrieves the count of failed events.
     */
    async getFailedEventCount() {
        await this.failedCount.waitForDisplayed();
        const failed = await this.failedCount.getText();
        return parseInt(failed.trim());
    }
}

module.exports = new DestinationPage();
