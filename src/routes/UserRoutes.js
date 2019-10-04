import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/user/LoginPage";
import HomePage from "../pages/user/HomePage";
import ProjectPage from "../pages/user/ProjectPage";

export default function UserRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/user/login" component={LoginPage} />
            <PrivateRoute
                exact
                path="/user/home"
                component={HomePage}
                pathtype="/user"
            />
            <PrivateRoute
                exact
                path="/user/project"
                component={ProjectPage}
                pathtype="/user"
            />
        </React.Fragment>
    );
}
