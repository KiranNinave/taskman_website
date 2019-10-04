import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/admin/HomePage";
import LoginPage from "../pages/admin/LoginPage";
import ProjectPage from "../pages/admin/ProjectPage";

export default function AdminRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/admin" component={LoginPage} />
            <Route path="/admin/home" component={HomePage} />
            <Route path="/admin/project" component={ProjectPage} />
        </React.Fragment>
    );
}
