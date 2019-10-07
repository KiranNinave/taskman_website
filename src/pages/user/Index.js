import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// layouts
import Header from "../../layouts/Header";
import SideNav from "../../layouts/SideNav";

// routes
import UserRouter from "../../routes/UserRoutes";

export default function User() {
    return (
        <React.Fragment>
            <Header pathname="/user" />
            <CssBaseline />
            <Container fixed>
                <SideNav pathname="/user" />

                <UserRouter />
            </Container>
        </React.Fragment>
    );
}
