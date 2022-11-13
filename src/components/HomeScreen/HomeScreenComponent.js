import React from "react";

import about from "../../data/about.json"

const HomeScreenComponent = () => {
    return (
        <>
        {about.details.map((item, key) => <p> {item} </p>)}
        </>
    )
}

export default HomeScreenComponent;