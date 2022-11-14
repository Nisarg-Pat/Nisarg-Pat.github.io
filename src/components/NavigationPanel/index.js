import React from "react";
import {Link} from "react-router-dom";

const NavigationPanel = (
    {
        active = "home"
    }) => {

    const resumeButtonClick = () => {
        window.open('/res/Resume_Nisarg_Patel.pdf', '_blank');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link to="/home" className={"navbar-brand ps-3"}>Nisarg Patel</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/home" className={"nav-link"}>
                                <div className={`${active === "home" ? "al-navbar-active" : ""}`}>
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experience" className={"nav-link"}>
                                <div className={`${active === "experience" ? "al-navbar-active" : ""}`}>
                                    Experience
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className={"nav-link"}>
                                <div className={`${active === "project" ? "al-navbar-active" : ""}`}>
                                    Projects
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className={"al-height-full al-v-center al-resume-btn"} onClick={resumeButtonClick}>Resume</button>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-2">
                            <a href={"https://github.com/Nisarg-Pat"}>
                                <i className="fa-brands fa-github al-icon-link"/>
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a href={"mailto:patel.nisargs@northeastern.edu"}>
                                <i className="fa-solid fa-envelope al-icon-link"/>
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a href={"https://www.linkedin.com/in/nisarg-patel-076733171/"}>
                                <i className="fa-brands fa-linkedin al-icon-link"/>
                            </a>
                        </li>
                        <li className="nav-item me-2" style={{marginTop: "3px"}}>
                            <a href={"https://leetcode.com/Nisarg_Pat/"} style={{textDecoration:"none"}}>
                                <i className="cib-leetcode al-icon-link" style={{padding:0}}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )

}

export default NavigationPanel;