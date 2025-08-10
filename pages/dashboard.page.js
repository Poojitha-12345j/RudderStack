const { BaseActions } = require("./base.page.js");
const { DashboardLocators } = require("../locators/dashboard.locators.js");
class DashboardPage extends BaseActions {
    /**
     * Navigate to the Connections by clicking connections option
     */
    async goToConnections() {
        await this.tapOnElement();
        await this.waitForDisplayed(DashboardLocators.connectionsOption);
        await this.clickElement(DashboardLocators.connectionsOption);
    }
}

module.exports = new DashboardPage();
