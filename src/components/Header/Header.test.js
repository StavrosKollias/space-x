import * as React from "react";
import debounce from "lodash.debounce";
import * as sinon from "sinon";
import * as TestingHelper from "../../test-utils";

import { Header } from "./Header";
import LABEL from "../../constants/Labels";

let debouceClock;

const listLaunchesMock = jest.fn();
const setSortMock = jest.fn();
const setFilterMock = jest.fn();
const setLaunchYearsMock = jest.fn();

beforeEach(() => {
    debouceClock = sinon.useFakeTimers();
    debounce(listLaunchesMock, 300);
    TestingHelper.setLaunchContext({
        listLaunches: listLaunchesMock,
        items: [],
        sort: false,
        setSort: setSortMock,
        filter: "",
        setFilter: setFilterMock,
        launchYears: [],
        setLaunchYears: setLaunchYearsMock,
    });
});

afterEach(() => {
    debouceClock.restore();
});

describe("Header component", () => {
    test("Renders with no errors", () => {
        const { getByTestId } = TestingHelper.renderComponent(<Header />);
        const headerComponent = getByTestId("header-component");
        expect(headerComponent).not.toBeNull();
    });

    test("Renders with logo", () => {
        const { getByTestId } = TestingHelper.renderComponent(<Header />);
        const imgTag = getByTestId("header-logo-container-img");
        expect(imgTag).not.toBeNull();
        expect(imgTag.src).toBe("http://localhost/spacex-logo.png");
        const logoTxt = getByTestId("header-logo-container-txt");
        expect(logoTxt).not.toBeNull();
        expect(logoTxt.textContent).toBe(LABEL.LAUNCHES);
    });

    test("Renders with reload button", () => {
        const { getByText } = TestingHelper.renderComponent(<Header />);
        const reloadButton = getByText(LABEL.RELOAD);
        expect(reloadButton).not.toBeNull();
        expect(reloadButton.textContent).toBe(LABEL.RELOAD);
        TestingHelper.act(() => {
            TestingHelper.fireEvent.click(reloadButton);
            debouceClock.tick(300);
            expect(listLaunchesMock).toHaveBeenCalledTimes(1);
        });
    });
});
