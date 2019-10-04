import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

const initalState = {
    token: null,
    user: null
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
        default:
            return state;
    }
};
