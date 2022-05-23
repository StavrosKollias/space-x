// Change below function to API call
// import axios from "axios";

// export const GetLaunchesAPI = (url) => {
//     const onSuccess = (response) => {
//         return response;
//     };

//     const onError = (err) => {
//         return { error: err.message };
//     };

//     return axios.get(url).then(onSuccess).catch(onError);
// };

// Change below function to API call
export const GetLaunchesAPI = async (url) => {
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            alert(error);
            return { error: error.message };
        });
};
