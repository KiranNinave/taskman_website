import { sendUrlEncodedRequest, httpMethods } from "../functions/requests";
import { sendResponse } from "../functions/responses";

export const adminLoginApi = async (user = {}) => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/login",
            httpMethods.POST,
            user
        );
        if (response.status === 401)
            throw new Error("Invalid email or password");
        return await sendResponse(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
