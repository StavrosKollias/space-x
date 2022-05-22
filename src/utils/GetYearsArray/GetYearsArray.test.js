import { GetYearsArray } from "./GetYearsArray";

const items = [
    {
        flight_number: 1,
        is_tentative: false,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_window: 0,
        launch_year: "2006",
        mission_name: "FalconSat2",
    },
    {
        flight_number: 1,
        is_tentative: false,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_window: 0,
        launch_year: "2009",
        mission_name: "FalconSat6",
    },
    {
        flight_number: 1,
        is_tentative: false,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_window: 0,
        launch_year: "2005",
        mission_name: "FalconSat3",
    },
    {
        flight_number: 1,
        is_tentative: false,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_window: 0,
        launch_year: "2009",
        mission_name: "FalconSat4",
    },
    {
        flight_number: 1,
        is_tentative: false,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_window: 0,
        launch_year: "2009",
        mission_name: "FalconSat6",
    },

    {
        flight_number: 1,
        is_tentative: false,
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_window: 0,
        launch_year: "2020",
        mission_name: "FalconSat6",
    },
];

// This is actual testing suite
describe("getYearsArray function", () => {
    test("retuns array of strings with the years", () => {
        const years = GetYearsArray(items);
        expect(years.length).toEqual(4);
        expect(years).toEqual(["2006", "2009", "2005", "2020"]);
    });
});
