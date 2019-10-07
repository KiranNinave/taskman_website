import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const adminGetUser = async () => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/user",
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddUser = async user => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/user",
            httpMethods.POST,
            user
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminUpdateUserById = async (id, user) => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/user/${id}`,
            httpMethods.PUT,
            user
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminDeleteUserById = async id => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/user/${id}`,
            httpMethods.DELETE
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
