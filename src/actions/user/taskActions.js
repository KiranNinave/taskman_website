import { GET_TASK, PATCH_STATUS, CHANGE_STATUS } from "../types";
import { userGetTask, userPatchTaskStatusById } from "../../apis/user/taskApis";

export const userGetTaskAction = () => async dispatch => {
    try {
        const response = await userGetTask();
        dispatch({
            type: GET_TASK,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const userPatchStatus = (id, task) => async dispatch => {
    try {
        const response = await userPatchTaskStatusById(id, task);
        dispatch({
            type: PATCH_STATUS,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const userChangeTaskStatus = (id, status) => dispatch => {
    dispatch({
        type: CHANGE_STATUS,
        payload: { id, status }
    });
};
