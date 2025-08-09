import { APIEndPoints } from "../constants/apiEndPoint";

export class TrackEventRequests {
    static async sendTrackEventRequest(client, userId, eventName, properties) {
        return client.post(APIEndPoints.TRACK_EVENT, {
            userId,
            event: eventName,
            properties,
        });
    }
}
