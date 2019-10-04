import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    const { user, pathname } = props;
    return (
        <header>
            <h1>Taskman {user}</h1>
            <NavLink to={`${pathname}/login`}>login</NavLink>
        </header>
    );
}
