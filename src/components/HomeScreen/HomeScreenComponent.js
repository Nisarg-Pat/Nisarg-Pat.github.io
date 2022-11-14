import React from "react";

import about from "../../data/about.json"

const HomeScreenComponent = () => {
    return (
        <>
            <img src={"/images/profile.png"} alt={"Profile Image"} className={"al-profile-img"}/>
            <div className={"al-profile-disc"}>
                {about.details.map((item, key) => <p> {item} </p>)}
            </div>
        </>
    )
}

export default HomeScreenComponent;