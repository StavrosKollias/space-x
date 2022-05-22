import axios from "axios";
import { GetLaunchesAPI } from "./GetLaunches";
// const GetLaunchesAPI = (url) => {
//     const onSuccess = (response) => {
//         return response;
//     };

//     const onError = (err) => {
//         throw err;
//     };

//     return axios.get(url).then(onSuccess).catch(onError);
// };

jest.mock("axios");
describe("GetLaunchesAPI", () => {
    it("fetches data from an API", async () => {
        const data = { test: "data" };
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(GetLaunchesAPI("https://react")).resolves.toEqual(data);
    });

    it("fetches error from  API", async () => {
        const errorMessage = "Network Error";
        axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(GetLaunchesAPI("https://react")).resolves.toEqual({ error: errorMessage });
    });
});
