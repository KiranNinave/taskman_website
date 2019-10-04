import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
    const { component: Component, admin, user, pathtype, ...rest } = props;
    let result = undefined;
    if (user) {
        if (admin) {
            if (user.role.type === "admin") result = true;
            else result = false;
        } else result = true;
    } else {
        result = false;
    }
    let pathname = "/";
    if (pathtype === "/admin") pathname = "/admin";
    if (pathtype === "/user") pathname = "/user/login";
    return (
        <Route
            {...rest}
            render={props =>
                result === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: pathname,
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = state => ({
    user: state.user.user
});
export default connect(
    mapStateToProps,
    null
)(PrivateRoute);
