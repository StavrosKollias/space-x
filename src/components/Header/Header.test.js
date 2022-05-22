import * as React from "react";
import debounce from "lodash.debounce";
import * as sinon from "sinon";
import * as TestingUtils from "../../test-utils";

import { Header } from "./Header";
import LABEL from "../../constants/Labels";

let debouceClock;

const listLaunchesMock = jest.fn();

beforeEach(() => {
    debouceClock = sinon.useFakeTimers();
    debounce(listLaunchesMock, 300);
    TestingUtils.setLaunchContext({
        listLaunches: listLaunchesMock,
        items: [],
        sort: false,
        setSort: jest.fn(),
        filter: "",
        setFilter: jest.fn(),
        launchYears: [],
        setLaunchYears: jest.fn(),
        loadingState: { loading: false, error: false, message: LABEL.LOADING, errorMessage: LABEL.ERROR },
        setLoadingState: jest.fn(),
    });
});

afterEach(() => {
    debouceClock.restore();
});

describe("Header component", () => {
    test("Renders with no errors", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Header />);
        const headerComponent = getByTestId("header-component");
        expect(headerComponent).not.toBeNull();
    });

    test("Renders with logo", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Header />);
        const imgTag = getByTestId("header-logo-container-img");
        expect(imgTag).not.toBeNull();
        expect(imgTag.src).toBe("http://localhost/spacex-logo.png");
        const logoTxt = getByTestId("header-logo-container-txt");
        expect(logoTxt).not.toBeNull();
        expect(logoTxt.textContent).toBe(LABEL.LAUNCHES);
    });

    test("Renders with reload button", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Header />);
        const reloadButton = getByTestId("button-component");
        expect(reloadButton).not.toBeNull();
        expect(reloadButton.textContent).toBe(LABEL.RELOAD);
        TestingUtils.act(() => {
            TestingUtils.fireEvent.click(reloadButton);
            debouceClock.tick(500);
            expect(listLaunchesMock).toHaveBeenCalledTimes(1);
        });
    });
});
