import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper green">

                    <a href="#" className="brand-logo center">Books Search</a>


                    <ul className="right hide-on-med-and-down">
                        {/* <li className={window.location.pathname === "/" ? "active" : ""}> */}
                        <li>
                            <Link
                                to="/"
                            >
                                Search
                            </Link>
                        </li>
                        {/* <li className={window.location.pathname === "/save" ? "active" : ""}> */}
                        <li>
                            <Link
                                to="/save"
                            >
                                Save
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
