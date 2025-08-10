import axios from "axios";
import https from "https";

export const createRudderstackClient = (dataPlaneUrl, writeKey) => {
    const authToken = Buffer.from(`${writeKey}:`).toString("base64");
    return axios.create({
        baseURL: dataPlaneUrl,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authToken}`,
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });
};
