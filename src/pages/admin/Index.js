import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// layouts
import Header from "../../layouts/Header";
import SideNav from "../../layouts/SideNav";

// routes
import AdminRouter from "../../routes/AdminRoutes";

export default function Admin() {
    return (
        <React.Fragment>
            <Header pathname="/admin" />
            <CssBaseline />
            <Container fixed>
                <SideNav pathname="/admin" />
                <AdminRouter />
            </Container>
        </React.Fragment>
    );
}
