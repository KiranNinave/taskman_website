export const sendResponse = async (response = {}) => {
    if (response.status === 401)
        throw new Error("Invalid credentials please relogin");

    let json = null;
    if (response.status !== 404) json = await response.json();
    if (process.env.NODE_ENV === "development") console.log(json);
    if (response.status === 400) throw new Error(json.message || "Bad request");

    if (response.status === 200 || response.status === 201) return json; //
    throw new Error("Cant reach to server");
};
