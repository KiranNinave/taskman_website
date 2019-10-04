import { LOGIN_USER } from "./types";
import { userLoginApi } from "../apis/userApis";

export const userLoginAction = user => async dispatch => {
    try {
        const response = await userLoginApi(user);
        console.log(response);
    } catch (err) {
        throw new Error(err.message);
    }
};
