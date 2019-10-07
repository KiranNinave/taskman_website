import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const userGetTask = async () => {
    try {
        const response = await sendUrlEncodedRequest(
            "/user/task",
            httpMethods.GET
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};

export const userPatchTaskStatusById = async (id, task) => {
    try {
        const response = await sendUrlEncodedRequest(
            `/user/task/${id}`,
            httpMethods.PATCH,
            task
        );
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
