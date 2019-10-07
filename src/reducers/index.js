import { combineReducers } from "redux";
import userReducer from "./userReducer";
import workspaceReducer from "./workspaceReducer";
import projectReducer from "./projectReducer";
import teamReducer from "./teamReducer";
import taskReducer from "./taskReducer";
import filterReducer from "./filtersReducer";

export default combineReducers({
    user: userReducer,
    workspace: workspaceReducer,
    project: projectReducer,
    team: teamReducer,
    task: taskReducer,
    filter: filterReducer
});
