import moment from "moment";
import {
    SET_TEXT_FILTER,
    SET_START_DATE,
    SET_END_DATE,
    SET_STATUS_FILTER
} from "../actions/types";

const filtersReducerDefaultState = {
    text: "",
    status: "",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case SET_TEXT_FILTER:
        case SET_START_DATE:
        case SET_END_DATE:
        case SET_STATUS_FILTER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
