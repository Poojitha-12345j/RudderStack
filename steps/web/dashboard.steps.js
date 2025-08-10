const { When } = require("@cucumber/cucumber");
const DashboardPage = require("../../pages/dashboard.page.js");

When(/^the user navigates to the Connections page$/, async () => {
    await DashboardPage.goToConnections();
});
