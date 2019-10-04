import React from "react";
import Header from "../layouts/Header";

export default function HomePage() {
    return (
        <div>
            <Header user="home" pathname="/user" />
            <h1>Home page of website</h1>
        </div>
    );
}
