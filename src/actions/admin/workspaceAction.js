import {
    GET_WORKSPACE,
    ADD_WORKSPACE,
    UPDATE_WORKSPACE,
    DELETE_WORKSPACE
} from "../types";
import {
    adminGetWorkspace,
    adminAddWorkspace,
    adminUpdateWorkspaceById,
    adminDeleteWorkspaceById
} from "../../apis/admin/workspaceApis";

export const adminGetWorkspaceAction = () => async dispatch => {
    try {
        const response = await adminGetWorkspace();
        dispatch({
            type: GET_WORKSPACE,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddWorkspaceAction = workspace => async dispatch => {
    try {
        const response = await adminAddWorkspace(workspace);
        dispatch({
            type: ADD_WORKSPACE,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminUpdateWorkspaceAction = (id, workspace) => async dispatch => {
    try {
        const response = await adminUpdateWorkspaceById(id, workspace);
        dispatch({
            type: UPDATE_WORKSPACE,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminDeleteWorkspaceAction = id => async dispatch => {
    try {
        const response = await adminDeleteWorkspaceById(id);
        dispatch({
            type: DELETE_WORKSPACE,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};
