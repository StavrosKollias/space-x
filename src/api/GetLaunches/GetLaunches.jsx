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
