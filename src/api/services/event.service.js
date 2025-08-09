import { createRudderstackClient } from "../clients/rudderstack.client.js";
import { TrackEventRequests } from "../requests/trackEvent.request.js";
import { TestEventData } from "../constants/testData.js";

export const sendTestEvent = async (dataPlaneUrl, writeKey) => {
    const client = createRudderstackClient(dataPlaneUrl, writeKey);
    return TrackEventRequests.sendTrackEventRequest(
        client,
        TestEventData.userId,
        TestEventData.event,
        TestEventData.properties
    );
};
