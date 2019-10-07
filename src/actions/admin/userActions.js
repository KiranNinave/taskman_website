import { GET_USER, ADD_USER } from "../types";
import { adminGetUser, adminAddUser } from "../../apis/admin/userApis";

export const adminGetUserAction = () => async dispatch => {
    try {
        const response = await adminGetUser();
        dispatch({
            type: GET_USER,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddUserAction = user => async dispatch => {
    try {
        const response = await adminAddUser(user);
        dispatch({
            type: ADD_USER,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};
