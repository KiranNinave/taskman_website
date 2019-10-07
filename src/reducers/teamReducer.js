import { GET_TEAM } from "../actions/types";

const initalState = {
    teams: []
};

export default (state = initalState, action) => {
    switch (action.type) {
        case GET_TEAM:
            return {
                ...state,
                teams: action.payload
            };
        default:
            return state;
    }
};
