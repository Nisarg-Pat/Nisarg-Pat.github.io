import React from "react";
import {Link} from "react-router-dom";

import resume from "../../data/res/Resume_Nisarg_Patel.pdf"

const NavigationPanel = (
    {
        active = "home"
    }) => {

    const resumeButtonClick = () => {
        window.open(resume, '_blank');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link to="/home" className={"navbar-brand ps-3"}>Nisarg Patel</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
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

                            {/*<a href={resume} className={"nav-link"}>*/}
                            {/*    <div className={`${active === "resume" ? "al-navbar-active" : ""}`}>*/}
                            {/*        Resume*/}
                            {/*    </div>*/}
                            {/*</a>*/}
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )

}

export default NavigationPanel;