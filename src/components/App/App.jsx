import React from "react";
import { Header } from "../Header";
import { Body } from "../Body";
import { useLaunchContext } from "../../contexts/LaunchContext";
import { axiosInterceptor } from "../../api/Interceptor/Interceptor";

export const App = () => {
    const { listLaunches, setLoadingState } = useLaunchContext();

    React.useEffect(() => {
        axiosInterceptor(setLoadingState);
        listLaunches();
    }, [listLaunches, setLoadingState]);

    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};
