import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const adminGetWorkspace = async () => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/workspace",
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddWorkspace = async workspace => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/workspace",
            httpMethods.POST,
            workspace
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminUpdateWorkspaceById = async (id, workspace) => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/workspace/${id}`,
            httpMethods.PUT,
            workspace
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminDeleteWorkspaceById = async id => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/workspace/${id}`,
            httpMethods.DELETE
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
