import React from "react";

import NavigationPanel from "../NavigationPanel";
import ResumeScreenComponent from "./ResumeScreenComponent";

const ResumeScreen = () => {
    return (
        <>
            <div className="mt-2">
                <NavigationPanel active={"resume"}/>
            </div>
            <div>
                <ResumeScreenComponent/>
            </div>
        </>
    );
}

export default ResumeScreen;