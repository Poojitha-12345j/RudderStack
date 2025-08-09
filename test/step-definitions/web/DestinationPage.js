const { When, Then } = require("@cucumber/cucumber");
const DestinationPage = require("../../../src/web/pages/DestinationPage");
const { runTimeData } = require("../../test-data");

When("the user views the Events tab", async () => {
    await DestinationPage.goToEventsTab();
});

Then("the user reads the count of delivered and failed events", async () => {
    runTimeData.deliveredEvents = await DestinationPage.getDeliveredEventCount();
    runTimeData.failedEvents = await DestinationPage.getFailedEventCount();
});
