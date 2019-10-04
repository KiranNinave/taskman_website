import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
import HomePage from "../pages/user/HomePage";
import ProjectPage from "../pages/user/ProjectPage";

export default function UserRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/user/login" component={LoginPage} />
            <Route exact path="/user/home" component={HomePage} />
            <Route exact path="/user/project" component={ProjectPage} />
        </React.Fragment>
    );
}
