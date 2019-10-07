import { GET_TASK, ADD_TASK } from "../types";
import { adminAddTask, adminGetTask } from "../../apis/admin/taskApis";

export const adminGetTaskAction = () => async dispatch => {
    try {
        const response = await adminGetTask();
        dispatch({
            type: GET_TASK,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddTaskAction = task => async dispatch => {
    try {
        const response = await adminAddTask(task);
        dispatch({
            type: ADD_TASK,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};
