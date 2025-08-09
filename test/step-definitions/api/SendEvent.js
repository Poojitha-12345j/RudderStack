const { When, Then } = require("@cucumber/cucumber");
const { runTimeData } = require("../../test-data");
import { sendTestEvent } from "../../../src/api/services/event.service.js";

let apiResponse; // store for use in the next step

When(/^the user sends a test event to the HTTP source$/, async () => {
    apiResponse = await sendTestEvent(runTimeData.dataPlaneUrl, runTimeData.writeKey);
    console.log("API Response:", apiResponse.data);
});

Then(/^the API response should be successful$/, async () => {
    expect(apiResponse.status).toBe(200);
    expect(apiResponse.data).toBe("ok");
});
