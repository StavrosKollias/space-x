import { GetYearFromDateString } from "./GetYearFromDateString";

describe("getYearFromDateString function", () => {
    test("retuns the year from a date string", () => {
        const year = GetYearFromDateString("2006-03-25T10:30:00+12:00");
        expect(year).toEqual(2006);
    });
});
