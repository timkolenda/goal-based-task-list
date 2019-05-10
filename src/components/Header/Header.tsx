import React, { Component } from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../GoogleAuth/GoogleAuth";


const Header = () => {
    return (
        <div data-test="component-header" className="container-fluid bg-dark">
            <nav className="navbar navbar-dark">
                <Link data-test="nav-logo-link" className="navbar-brand" to="/" >Goal List</Link>
                <GoogleAuth />
            </nav>
        </div>
    )
}

export default Header;