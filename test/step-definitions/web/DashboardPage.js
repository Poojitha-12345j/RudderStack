const { When } = require("@cucumber/cucumber");
const DashboardPage = require("../../../src/web/pages/DashboardPage");

When(/^the user navigates to the Connections page$/, async () => {
    await DashboardPage.tapOnScreen();
    await DashboardPage.goToConnections();
});
