import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div class="navbar-fixed">
            <nav>
                <div className="nav-wrapper green">

                    <a href="#" className="brand-logo center">books search</a>


                    <ul className="right hide-on-med-and-down">
                        <li className={window.location.pathname === "/" ? "active" : ""}>
                            <Link
                                to="/"
                            >
                                Search
                            </Link>
                        </li>
                        <li className={window.location.pathname === "/save" ? "active" : ""}>
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
