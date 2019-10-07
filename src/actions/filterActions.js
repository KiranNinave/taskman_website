import {
    SET_TEXT_FILTER,
    SET_START_DATE,
    SET_END_DATE,
    SET_STATUS_FILTER
} from "./types";

export const setTextFilter = text => dispatch => {
    dispatch({
        type: SET_TEXT_FILTER,
        payload: { text }
    });
};

export const setStartDateFilter = startDate => dispatch => {
    dispatch({
        type: SET_START_DATE,
        payload: {
            startDate
        }
    });
};

export const setEndDateFilter = endDate => dispatch => {
    dispatch({
        type: SET_END_DATE,
        payload: {
            endDate
        }
    });
};

export const setStatusFilter = status => dispatch => {
    dispatch({
        type: SET_STATUS_FILTER,
        payload: {
            status
        }
    });
};
