import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/admin/HomePage";
import LoginPage from "../pages/admin/LoginPage";
import ProjectPage from "../pages/admin/ProjectPage";

export default function AdminRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/admin" component={LoginPage} />
            <PrivateRoute
                path="/admin/home"
                component={HomePage}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/project"
                component={ProjectPage}
                admin={true}
                pathtype="/admin"
            />
        </React.Fragment>
    );
}
