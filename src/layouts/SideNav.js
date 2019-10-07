import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    }
}));

function SideNav(props) {
    const { pathname, user } = props;
    const classes = useStyles();
    return (
        <Paper style={{ padding: 10, marginTop: 15, marginBottom: 15 }}>
            <List
                component="nav"
                aria-label="secondary mailbox folders"
                style={{ display: "flex", flexDirection: "row", padding: 0 }}
            >
                <NavLink
                    style={{ color: "#000", textDecoration: "none" }}
                    to={`${pathname}/home`}
                >
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
                {user && user.role.type === "admin" && (
                    <React.Fragment>
                        <NavLink
                            style={{ color: "#000", textDecoration: "none" }}
                            to={`${pathname}/project`}
                        >
                            <ListItem button>
                                <ListItemText primary="Projects" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            style={{ color: "#000", textDecoration: "none" }}
                            to={`${pathname}/team`}
                        >
                            <ListItem button>
                                <ListItemText primary="Teams" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            style={{ color: "#000", textDecoration: "none" }}
                            to={`${pathname}/user`}
                        >
                            <ListItem button>
                                <ListItemText primary="Users" />
                            </ListItem>
                        </NavLink>
                        <NavLink
                            style={{ color: "#000", textDecoration: "none" }}
                            to={`${pathname}/task`}
                        >
                            <ListItem button>
                                <ListItemText primary="Tasks" />
                            </ListItem>
                        </NavLink>
                    </React.Fragment>
                )}
            </List>
        </Paper>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    null
)(SideNav);
