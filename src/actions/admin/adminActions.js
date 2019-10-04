import { LOGIN_USER, LOGOUT_USER } from "../types";
import { adminLoginApi } from "../../apis/admin/adminApis";
import {
    saveUserOnStorage,
    deleteUserFromStorage
} from "../../apis/storageApis";

export const adminLoginAction = user => async dispatch => {
    try {
        const response = await adminLoginApi(user);
        saveUserOnStorage(response);
        dispatch({
            type: LOGIN_USER,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminLogoutAction = () => dispatch => {
    deleteUserFromStorage();
    dispatch({
        type: LOGOUT_USER
    });
};
