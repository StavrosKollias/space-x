import * as React from "react";
import * as TestingUtils from "../../test-utils";
import { Select } from "./Select";
import LABEL from "../../constants/Labels";
const years = ["2021", "2022", "2010", "2005"];
const mockSetFilter = jest.fn();
beforeEach(() => {
    TestingUtils.setLaunchContext({
        listLaunches: jest.fn(),
        items: [],
        sort: false,
        setSort: jest.fn(),
        filter: "",
        setFilter: mockSetFilter,
        launchYears: [],
        setLaunchYears: jest.fn(),
        loadingState: { loading: false, error: false, message: LABEL.LOADING, errorMessage: LABEL.ERROR },
        setLoadingState: jest.fn(),
    });
});

describe("Select component", () => {
    test("Renders with no errors", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Select label={LABEL.FILTER_BY_YEAR} options={years} />);
        const selectComponent = getByTestId("select-component");
        expect(selectComponent).not.toBeNull();
    });

    test("Renders with correct options", () => {
        const { getByTestId, getAllByTestId } = TestingUtils.renderComponent(<Select label={LABEL.FILTER_BY_YEAR} options={years} />);
        const selectComponent = getByTestId("select-component");
        expect(selectComponent).not.toBeNull();
        const options = getAllByTestId("select-option");
        expect(options.length).toBe(5);
        expect(options[0].value).toBe("");
        expect(options[1].value).toBe(years[0]);
        expect(options[2].value).toBe(years[1]);
        expect(options[3].value).toBe(years[2]);
        expect(options[4].value).toBe(years[3]);
    });

    test("Interaction with the selection button fire setFilter", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Select label={LABEL.FILTER_BY_YEAR} options={years} />);
        const selectComponent = getByTestId("select-component");
        expect(selectComponent).not.toBeNull();
        TestingUtils.act(() => {
            TestingUtils.fireEvent.change(selectComponent, { target: { value: "2005" } });
            expect(mockSetFilter).toHaveBeenCalledTimes(1);
        });
    });
});
