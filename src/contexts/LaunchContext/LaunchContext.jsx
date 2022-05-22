import React from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";
import { GetYearsArray } from "../../utils";
import LABEL from "../../constants/Labels";
import CONSTANTS from "../../constants/Config";

export const loadingStateInitial = {
    loading: true,
    error: false,
    message: LABEL.LOADING,
    errorMessage: LABEL.ERROR,
};

export const launchContextDefaults = {
    listLaunches: Function,
    items: [],
    sort: false,
    setSort: Function,
    filter: "",
    setFilter: Function,
    launchYears: [],
    setlaunchYears: Function,
    loadingState: loadingStateInitial,
    setLoadingState: Function,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
    const [items, setItems] = React.useState([]);
    const [launchYears, setLaunchYears] = React.useState([]);
    const [sort, setSort] = React.useState(false);
    const [filter, setFilter] = React.useState("");
    const [loadingState, setLoadingState] = React.useState(loadingStateInitial);

    const handleSuccessResponse = (response) => {
        const launchYearsArray = GetYearsArray(response);
        setLaunchYears(launchYearsArray);
        setItems(response);
        setLoadingState((loadingState) => {
            return {
                ...loadingState,
                loading: false,
                error: false,
            };
        });
    };

    const handleErrorResponse = () => {
        setLoadingState((loadingState) => {
            return {
                ...loadingState,
                loading: false,
                error: true,
            };
        });
    };

    return (
        <LaunchContext.Provider
            value={{
                listLaunches: React.useCallback(async () => {
                    setFilter("");
                    setLoadingState((loadingState) => {
                        return {
                            ...loadingState,
                            loading: true,
                        };
                    });
                    const response = await GetLaunchesAPI(CONSTANTS.SPACE_X_API);
                    response.error ? handleErrorResponse() : handleSuccessResponse(response);
                }, []),
                items,
                sort,
                setSort,
                filter,
                setFilter,
                launchYears,
                setLaunchYears,
                loadingState,
                setLoadingState,
            }}>
            {children}
        </LaunchContext.Provider>
    );
};
