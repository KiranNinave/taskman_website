import { GET_PROJECT, GET_PROJECT_USER } from "../actions/types";

const initialState = {
    projects: [],
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload
            };
        case GET_PROJECT_USER:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};
