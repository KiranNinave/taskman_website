import { sendUrlEncodedRequest, httpMethods } from "./functions/requests";

export const userLoginApi = async (user = {}) => {
    try {
        const response = await sendUrlEncodedRequest(
            "/admin/login",
            httpMethods.POST,
            user
        );
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
            return await response.json();
        }
        if (response.status === 401) {
            throw new Error("Invalid email or password");
        }
        throw new Error("Cant reach to server");
    } catch (err) {
        throw new Error(err.message);
    }
};
