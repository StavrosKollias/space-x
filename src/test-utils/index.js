// IMPORTS
import { render } from "@testing-library/react";
import { LaunchContext } from "../contexts/LaunchContext";

// EXPORTS
export { render, act, waitFor, fireEvent, userEvent } from "@testing-library/react";

// UTILS
let LaunchContextMock;

export const renderComponent = (component) => {
    return render(<LaunchContext.Provider value={LaunchContextMock}>{component}</LaunchContext.Provider>);
};

export const setLaunchContext = (LaunchContext) => {
    LaunchContextMock = { ...LaunchContextMock, ...LaunchContext };
};
