import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const adminGetTeam = async () => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/team",
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

export const adminAddTeam = async team => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/team",
            httpMethods.POST,
            team
        );
        return await sendResponse(response);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

export const adminUpdateTeam = async (id, team) => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/team/${id}`,
            httpMethods.PUT,
            team
        );
        return await sendResponse(response);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};

export const adminDeleteTeam = async id => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/team/${id}`,
            httpMethods.DELETE
        );
        return await sendResponse(response);
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
};
