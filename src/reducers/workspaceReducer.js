import { GET_WORKSPACE, ADD_WORKSPACE } from "../actions/types";

const initialState = {
    workspaces: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKSPACE:
            return {
                ...state,
                workspaces: action.payload
            };
        case ADD_WORKSPACE:
            return {
                ...state,
                workspaces: [...state.workspaces, action.payload]
            };
        default:
            return state;
    }
};
