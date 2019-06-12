import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(props) {
    console.log(props)
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper green">

                    <a href="#" className="brand-logo center">Books Search</a>


                    <ul className="right hide-on-med-and-down">
                        {/* <li className={windows.location === "/" ? "active" : ""}> */}
                        <li>
                            <Link
                                to="/"
                            >
                                Search
                            </Link>
                        </li>
                        {/* <li className={props.location === "/save" ? "active" : ""}> */}
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
