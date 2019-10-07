import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { adminLogoutAction } from "../actions/admin/adminActions";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

function Header(props) {
    const { user, pathname } = props;
    let path = "/admin";
    if (pathname === "/user") {
        path = "/user/login";
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="default" position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Taskman
                    </Typography>
                    {!user && (
                        <NavLink
                            to={path}
                            style={{ color: "#000", textDecoration: "none" }}
                        >
                            <Button color="inherit">login</Button>
                        </NavLink>
                    )}

                    {user && (
                        <Button
                            color="inherit"
                            onClick={e => {
                                props.adminLogoutAction();
                            }}
                        >
                            logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});
export default connect(
    mapStateToProps,
    { adminLogoutAction }
)(Header);
