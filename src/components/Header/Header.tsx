import React, { Component } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div data-test="component-header" className="container-fluid bg-dark">
            <nav className="navbar navbar-dark">
                <Link className="navbar-brand" to="/" >Goal List</Link>
            </nav>
        </div>
    )
}

export default Header;