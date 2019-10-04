import { LOGIN_USER } from "./types";
import { userLoginApi } from "../apis/userApis";
import { saveUserOnStorage } from "../apis/storageApis";

export const userLoginAction = user => async dispatch => {
    try {
        const response = await userLoginApi(user);
        saveUserOnStorage(response);
        dispatch({
            type: LOGIN_USER,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const userExistingLogin = user => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: user
    });
};
