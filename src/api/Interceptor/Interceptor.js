import axios from "axios";
import LABEL from "../../constants/Labels";

export const axiosInterceptor = (setLoadingState) => {
    let numberOfCallsPending = 0;
    // request interceptor
    axios.interceptors.request.use(
        (request) => {
            numberOfCallsPending++;
            return request;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // response interceptor
    axios.interceptors.response.use(
        (response) => {
            numberOfCallsPending--;
            if (numberOfCallsPending === 0) {
                const loadingState = {
                    loading: false,
                    error: false,
                    message: LABEL.LOADING,
                    errorMessage: LABEL.ERROR,
                };

                setLoadingState(loadingState);
            }
            return response;
        },

        (error) => {
            numberOfCallsPending--;
            // axios.CancelToken.source();
            const loadingState = {
                loading: false,
                error: true,
                message: LABEL.LOADING,
                errorMessage: LABEL.ERROR,
            };

            setLoadingState(loadingState);
            return error;
        }
    );
};
