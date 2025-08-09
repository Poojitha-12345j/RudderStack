const { BaseActions } = require("../pages/BaseActionsPage.js");
class DashboardPage extends BaseActions {
    get connectionsOption() {
        return $("[data-testid='sub-menu-connections']");
    }
    /**
     * Navigate to the Connections
     */
    async goToConnections() {
        await this.connectionsOption.waitForDisplayed({ timeout: 5000 });
        await this.connectionsOption.click();
    }
}

module.exports = new DashboardPage();
