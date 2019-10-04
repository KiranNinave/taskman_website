import React from "react";
import { NavLink } from "react-router-dom";

function SideNav(props) {
    const { pathname } = props;
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={`${pathname}/home`}>home</NavLink>
                </li>
                <li>
                    <NavLink to={`${pathname}/project`}>projects</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideNav;
