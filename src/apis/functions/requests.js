import { API_URL } from "../domain";
import store from "../../store/";

export const httpMethods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH"
};

export const sendUrlEncodedRequest = async (
    url = "",
    method = httpMethods.GET,
    data = {}
) => {
    const header = {
        method: method,
        headers: {}
    };

    // attaching urlencoded data
    const urlEncodedFormData = new URLSearchParams();
    if (method !== httpMethods.GET && method !== httpMethods.DELETE) {
        for (let key in data) {
            urlEncodedFormData.append(key, data[key]);
        }
        header.body = urlEncodedFormData;
    }

    // attaching jwt token
    const token = store.getState().user.token;
    if (token) header.headers["Authorization"] = token;

    return await fetch(`${API_URL}${url}`, header);
};
