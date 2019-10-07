import { LOGIN_USER, LOGOUT_USER, GET_USER } from "../actions/types";

const initalState = {
    token: null,
    user: null,
    users: []
};

export default (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload
            };
        case LOGOUT_USER:
            return {
                token: null,
                user: null
            };
        case GET_USER:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};
