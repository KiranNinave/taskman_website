import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { adminLogoutAction } from "../actions/admin/adminActions";

function Header(props) {
    const { user, pathname } = props;
    let path = "/admin";
    if (pathname === "/user") {
        path = "/user/login";
    }
    return (
        <header>
            <h1>Taskman</h1>
            {!user && <NavLink to={path}>login</NavLink>}
            {user && (
                <button
                    onClick={e => {
                        props.adminLogoutAction();
                    }}
                >
                    logout
                </button>
            )}
        </header>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});
export default connect(
    mapStateToProps,
    { adminLogoutAction }
)(Header);
