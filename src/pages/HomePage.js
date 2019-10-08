import React from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Header user="home" pathname="/user" />
                <Container fixed>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h1>TaskMan</h1>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <div style={{ marginRight: 30 }}>
                                <Link to="/user/login">
                                    <Button variant="contained">login</Button>
                                </Link>
                            </div>

                            <div style={{ marginRight: 30 }}>
                                <Link to="/user/home">
                                    <Button variant="contained">home</Button>
                                </Link>
                            </div>

                            <div>
                                <Link to="/admin">
                                    <Button variant="contained">admin</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default HomePage;
