import { API_URL } from "../domain";

export const httpMethods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
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

    const urlEncodedFormData = new URLSearchParams();
    if (method !== httpMethods.GET) {
        for (let key in data) {
            urlEncodedFormData.append(key, data[key]);
        }
        header.body = urlEncodedFormData;
    }

    return await fetch(`${API_URL}${url}`, header);
};
