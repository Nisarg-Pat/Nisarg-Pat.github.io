import React from "react";
import NavigationPanel from "../NavigationPanel";
import HomeScreenComponent from "./HomeScreenComponent";

const HomeScreen = () => {
    return (
            <>
                <div className="mt-2">
                    <NavigationPanel/>
                </div>

                <HomeScreenComponent/>
            </>

        )
}

export default HomeScreen;