import { sendUrlEncodedRequest, httpMethods } from "./functions/requests";
import { sendResponse } from "./functions/responses";

export const userLoginApi = async (user = {}) => {
    try {
        const response = await sendUrlEncodedRequest(
            "/user/login",
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
