import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const adminGetProject = async () => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/project",
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminGetProjectUserById = async id => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/project/${id}/user`,
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddProject = async project => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/project",
            httpMethods.POST,
            project
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminUpdateProject = async (id, project) => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/project/${id}`,
            httpMethods.PUT,
            project
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminDeleteProject = async id => {
    try {
        const response = await sendUrlEncodedRequest(
            `/admin/project/${id}`,
            httpMethods.DELETE
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
