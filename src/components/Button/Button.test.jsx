import * as React from "react";
import * as TestingUtils from "../../test-utils";
import { Button } from "./Button";

const listLaunchesMock = jest.fn();

describe("Button component", () => {
    test("Renders with no errors", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Button label={"CLick me"} onClick={listLaunchesMock} />);
        const buttonComponent = getByTestId("button-component");
        expect(buttonComponent).not.toBeNull();
        expect(buttonComponent.textContent).toBe("CLick me");
    });

    test("click fires the function passed from props", () => {
        const { getByTestId } = TestingUtils.renderComponent(<Button label={"CLick me"} onClick={listLaunchesMock} />);
        const buttonComponent = getByTestId("button-component");
        TestingUtils.act(() => {
            TestingUtils.fireEvent.click(buttonComponent);
            expect(listLaunchesMock).toHaveBeenCalledTimes(1);
        });
    });
});
