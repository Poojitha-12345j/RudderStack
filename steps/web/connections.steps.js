const { When } = require("@cucumber/cucumber");
const ConnectionsPage = require("../../pages/connections.page.js");
const { runTimeData } = require("../../utils/runTimeData.js");

When(/^the user retrieves the data plane URL and write key$/, async () => {
    runTimeData.dataPlaneUrl = await ConnectionsPage.getDataPlaneUrl();
    runTimeData.writeKey = await ConnectionsPage.getWriteKey();
});

When(/^the user opens the webhook destination$/, async () => {
    await ConnectionsPage.openWebhookDestination();
});
