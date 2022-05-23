import React from "react";
import { Header } from "../Header";
import { Body } from "../Body";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const App = () => {
    const { listLaunches, setLoadingState } = useLaunchContext();

    React.useEffect(() => {
        listLaunches();
    }, [listLaunches, setLoadingState]);

    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};
