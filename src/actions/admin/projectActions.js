import {
    ADD_PROJECT,
    GET_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    GET_PROJECT_USER
} from "../types";
import {
    adminAddProject,
    adminGetProject,
    adminDeleteProject,
    adminUpdateProject,
    adminGetProjectUserById
} from "../../apis/admin/projectApis";

export const adminGetProjectAction = () => async dispatch => {
    try {
        const response = await adminGetProject();
        dispatch({
            type: GET_PROJECT,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminGetProjectUsers = id => async dispatch => {
    try {
        const response = await adminGetProjectUserById(id);
        dispatch({
            type: GET_PROJECT_USER,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddProjectAction = project => async dispatch => {
    try {
        const response = await adminAddProject(project);
        dispatch({
            type: ADD_PROJECT,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminUpdateProjectAction = (id, project) => async dispatch => {
    try {
        const response = await adminUpdateProject(id, project);
        dispatch({
            type: UPDATE_PROJECT,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminDeleteProjectAction = id => async dispatch => {
    try {
        const response = await adminDeleteProject(id);
        dispatch({
            type: DELETE_PROJECT,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};
