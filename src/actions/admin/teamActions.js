import { ADD_TEAM, UPDATE_TEAM, GET_TEAM, DELETE_TEAM } from "../types";
import {
    adminAddTeam,
    adminGetTeam,
    adminDeleteTeam,
    adminUpdateTeam
} from "../../apis/admin/teamApis";

export const adminGetTeamAction = () => async dispatch => {
    try {
        const response = await adminGetTeam();
        dispatch({
            type: GET_TEAM,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminAddTeamAction = team => async dispatch => {
    try {
        const response = await adminAddTeam(team);
        dispatch({
            type: ADD_TEAM,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminUpdateTeamAction = (id, team) => async dispatch => {
    try {
        const response = await adminUpdateTeam(id, team);
        dispatch({
            type: UPDATE_TEAM,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};

export const adminDeleteTeamAction = id => async dispatch => {
    try {
        const response = await adminDeleteTeam(id);
        dispatch({
            type: DELETE_TEAM,
            payload: response
        });
    } catch (err) {
        throw new Error(err.message);
    }
};
