// Change below function to API call
import axios from "axios";

// export const api = axios.create();

export const GetLaunchesAPI = (url) => {
    const onSuccess = (response) => {
        return response;
    };

    const onError = (err) => {
        return { error: err.message };
    };

    return axios.get(url).then(onSuccess).catch(onError);
};
