import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// workspaces
import HomePage from "../pages/admin/HomePage/HomePage";
import HomePageAdd from "../pages/admin/HomePage/HomePageAdd";
import HomePageEdit from "../pages/admin/HomePage/HomePageEdit";
import HomePageView from "../pages/admin/HomePage/HomePageView";

import LoginPage from "../pages/admin/LoginPage";

// project
import ProjectPage from "../pages/admin/ProjectPage/ProjectPage";
import ProjectPageAdd from "../pages/admin/ProjectPage/ProjectPageAdd";
import ProjectPageEdit from "../pages/admin/ProjectPage/ProjectPageEdit";
import ProjectPageView from "../pages/admin/ProjectPage/ProjectPageView";

// team
import TeamPage from "../pages/admin/TeamPage/TeamPage";
import TeamPageAdd from "../pages/admin/TeamPage/TeamPageAdd";
import TeamPageEdit from "../pages/admin/TeamPage/TeamPageEdit";
import TeamPageView from "../pages/admin/TeamPage/TeamPageView";

// user
import UserPage from "../pages/admin/UserPage/UserPage";
import UserPageAdd from "../pages/admin/UserPage/UserPageAdd";

// task
import TaskPage from "../pages/admin/TaskPage/TaskPage";
import TaskPageAdd from "../pages/admin/TaskPage/TaskPageAdd";

export default function AdminRoutes() {
    return (
        <React.Fragment>
            <Route exact path="/admin" component={LoginPage} />
            <PrivateRoute
                path="/admin/home"
                exact
                component={HomePage}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/home/add"
                exact
                component={HomePageAdd}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/home/edit/:id"
                exact
                component={HomePageEdit}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/home/view/:id"
                exact
                component={HomePageView}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/project"
                exact
                component={ProjectPage}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/project/add"
                exact
                component={ProjectPageAdd}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/project/edit/:id"
                exact
                component={ProjectPageEdit}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/project/view/:id"
                exact
                component={ProjectPageView}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/team"
                exact
                component={TeamPage}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/team/add"
                exact
                component={TeamPageAdd}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/team/edit/:id"
                exact
                component={TeamPageEdit}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/team/view/:id"
                exact
                component={TeamPageView}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/user"
                exact
                component={UserPage}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/user/add"
                exact
                component={UserPageAdd}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/task"
                exact
                component={TaskPage}
                admin={true}
                pathtype="/admin"
            />
            <PrivateRoute
                path="/admin/task/add"
                exact
                component={TaskPageAdd}
                admin={true}
                pathtype="/admin"
            />
        </React.Fragment>
    );
}
