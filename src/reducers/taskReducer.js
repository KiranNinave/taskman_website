import { GET_TASK, CHANGE_STATUS } from "../actions/types";

const initialState = {
    tasks: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TASK:
            return {
                ...state,
                tasks: action.payload
            };
        case CHANGE_STATUS:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    if (task._id === action.payload.id)
                        task.status = action.payload.status;
                    return task;
                })
            };
        default:
            return state;
    }
};
