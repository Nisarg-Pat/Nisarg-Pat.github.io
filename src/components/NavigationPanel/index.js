import React from "react";
import {Link} from "react-router-dom";

const NavigationPanel = (
    {
        active = "home"
    }) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link to="/home" className={"navbar-brand ps-3"}>Nisarg Patel</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/home" className={"nav-link"}>
                                <div className={`${active === "home" ? "al-navbar-active" : ""}`}>
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item active">
                                <Link to="/experience" className={"nav-link"}>
                                    <div className={`${active === "experience" ? "al-navbar-active" : ""}`}>
                                        Experience
                                    </div>
                                </Link>
                            </li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item active">
                                <Link to="/projects" className={"nav-link"}>
                                    <div className={`${active === "project" ? "al-navbar-active" : ""}`}>
                                        Projects
                                    </div>
                                </Link>
                            </li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item active">
                                <Link to="/resume" className={"nav-link"}>
                                    <div className={`${active === "resume" ? "al-navbar-active" : ""}`}>
                                        Resume
                                    </div>
                                </Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )

}

export default NavigationPanel;