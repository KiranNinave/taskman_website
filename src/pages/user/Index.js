import React from "react";

// layouts
import Header from "../../layouts/Header";
import SideNav from "../../layouts/SideNav";

// routes
import UserRouter from "../../routes/UserRoutes";

export default function User() {
    return (
        <React.Fragment>
            <Header pathname="/user" />
            <SideNav pathname="/user" />
            <h1>user</h1>
            <UserRouter />
        </React.Fragment>
    );
}
