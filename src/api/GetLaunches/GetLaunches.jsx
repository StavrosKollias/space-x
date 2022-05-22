// Change below function to API call
export const GetLaunchesAPI = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    return json;
};
