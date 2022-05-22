import React from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";
import { GetYearsArray } from "../../utils";
import CONSTANTS from "../../constants/Config";

export const launchContextDefaults = {
    listLaunches: Function,
    items: [],
    sort: false,
    setSort: Function,
    filter: "",
    setFilter: Function,
    launchYears: [],
    setlaunchYears: Function,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
    const [items, setItems] = React.useState([]);
    const [launchYears, setLaunchYears] = React.useState([]);
    const [sort, setSort] = React.useState(false);
    const [filter, setFilter] = React.useState("");

    return (
        <LaunchContext.Provider
            value={{
                listLaunches: React.useCallback(async () => {
                    setFilter("");
                    const response = await GetLaunchesAPI(CONSTANTS.SPACE_X_API);
                    const launchYearsArray = GetYearsArray(response);
                    setLaunchYears(launchYearsArray);
                    setItems(response);
                }, []),
                items,
                sort,
                setSort,
                filter,
                setFilter,
                launchYears,
                setLaunchYears,
            }}>
            {children}
        </LaunchContext.Provider>
    );
};
