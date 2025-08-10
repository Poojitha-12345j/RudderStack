const { When, Then } = require("@cucumber/cucumber");
const DestinationPage = require("../../pages/destination.page.js");
const { runTimeData } = require("../../utils/runTimeData.js");

When("the user views the Events tab", async () => {
    await DestinationPage.goToEventsTab();
});

Then("the user reads the count of delivered and failed events", async () => {
    runTimeData.deliveredEvents = await DestinationPage.getDeliveredEventCount();
    runTimeData.failedEvents = await DestinationPage.getFailedEventCount();
});
