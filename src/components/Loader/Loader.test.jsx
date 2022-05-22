import * as React from "react";
import * as TestingUtils from "../../test-utils";
import { Loader } from "./Loader";

import LABEL from "../../constants/Labels";

const listLaunchesMock = jest.fn();

beforeEach(() => {
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

describe("Loader component", () => {
    test("Renders with no errors", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Loader />);
        const loaderComponent = getByTestId("loader-component");
        expect(loaderComponent).not.toBeNull();
    });

    test("Renders with =bounce component", () => {
        TestingUtils.setLaunchContext({
            loadingState: { loading: true, error: false, message: LABEL.LOADING, errorMessage: LABEL.ERROR },
        });
        const { getByTestId } = TestingUtils.renderComponent(<Loader />);
        const bounceComponent = getByTestId("loader-bounce-component");
        expect(bounceComponent).not.toBeNull();
        const loaderMessage = getByTestId("loader-msg");
        expect(loaderMessage).not.toBeNull();
        expect(loaderMessage.textContent).toBe(LABEL.LOADING);
    });

    test("Renders with error component", () => {
        TestingUtils.setLaunchContext({
            loadingState: { loading: false, error: true, message: LABEL.LOADING, errorMessage: LABEL.ERROR },
        });
        const { getByTestId } = TestingUtils.renderComponent(<Loader />);
        const errorIconComponent = getByTestId("loader-error-component");
        expect(errorIconComponent).not.toBeNull();
        const loaderMessage = getByTestId("loader-msg");
        expect(loaderMessage).not.toBeNull();
        expect(loaderMessage.textContent).toBe(LABEL.ERROR);
    });
});
