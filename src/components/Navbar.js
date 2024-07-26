import React from "react";
import logo from '../images/react-logo.png';
import '../style.css'; // Make sure to import the CSS file

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="React Logo" style={{ width: '40px' }} />
            <div className="nav-text">
                <h3>ReactFacts</h3>
                <h4>React course - project 1</h4>
            </div>
        </nav>
    );
}

export default Navbar;
