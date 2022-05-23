import { GetLaunchesAPI } from "./GetLaunches";
const unmockedFetch = global.fetch;

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        });
});

afterAll(() => {
    global.fetch = unmockedFetch;
});

// This is actual testing suite
describe("GetLaunchesAPI", () => {
    test("API Retuns Array and works", async () => {
        const json = await GetLaunchesAPI("https://testing_api/12");
        expect(Array.isArray(json)).toEqual(true);
        expect(json.length).toEqual(0);
    });
});
