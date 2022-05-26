// Change below function to API call
export const GetLaunchesAPI = (url) => {
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            return { error: error.message };
        });
};
