import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const adminGetTask = async () => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/task",
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddTask = async (task = {}) => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/task",
            httpMethods.POST,
            task
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
