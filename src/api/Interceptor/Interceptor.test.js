import axios from "axios";
import { axiosInterceptor } from "./Interceptor";

const mockSetLoadingState = jest.fn();

describe("RESPONSE: interceptor works as expected with 200 Response", () => {
    it("returns a response 200 with no return message", async () => {
        axiosInterceptor(mockSetLoadingState);

        const res = {
            status: 200,
        };
        const response = axios.interceptors.response["handlers"][0].fulfilled(res);
        expect(response).toBe(res);
        expect(mockSetLoadingState).toHaveBeenCalledTimes(0);
    });

    it("returns an error response", async () => {
        axiosInterceptor(mockSetLoadingState);
        const res = {
            status: 404,
        };
        const rejectedRes = (axios.interceptors.response["handlers"][0].rejectedRes = res);
        expect(rejectedRes).toMatchObject(res);
        expect(mockSetLoadingState).toHaveBeenCalledTimes(0);
    });
});
