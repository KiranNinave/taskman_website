import React from "react";

// layouts
import Header from "../../layouts/Header";
import SideNav from "../../layouts/SideNav";

// routes
import AdminRouter from "../../routes/AdminRoutes";

export default function Admin() {
    return (
        <React.Fragment>
            <Header user="admin" pathname="/admin" />
            <SideNav pathname="/admin" />
            <h1>admin</h1>
            <AdminRouter />
        </React.Fragment>
    );
}
