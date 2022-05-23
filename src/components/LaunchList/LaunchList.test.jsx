import * as React from "react";
import moment from "moment";
import * as TestingUtils from "../../test-utils";
import { LaunchList } from "./LaunchList";

const items = [
    {
        flight_number: 1,
        mission_name: "FalconSat",
        mission_id: [],
        upcoming: false,
        launch_year: "2006",
        launch_date_unix: 1143239400,
        launch_date_utc: "2006-03-24T22:30:00.000Z",
        launch_date_local: "2006-03-25T10:30:00+12:00",
        is_tentative: false,
        tentative_max_precision: "hour",
        tbd: false,
        launch_window: 0,
        rocket: {
            rocket_id: "falcon1",
            rocket_name: "Falcon 1",
            rocket_type: "Merlin A",
        },
        details: "Engine failure at 33 seconds and loss of vehicle",
    },
    {
        flight_number: 1,
        mission_name: "FalconSat",
        mission_id: [],
        upcoming: false,
        launch_year: "2005",
        launch_date_unix: 1143239400,
        launch_date_utc: "2005-03-24T22:30:00.000Z",
        launch_date_local: "2005-03-25T10:30:00+12:00",
        is_tentative: false,
        tentative_max_precision: "hour",
        tbd: false,
        launch_window: 0,
        rocket: {
            rocket_id: "falcon1",
            rocket_name: "Falcon 1",
            rocket_type: "Merlin A",
        },
        details: "Engine failure at 33 seconds and loss of vehicle",
    },
];

describe("Launch List  component", () => {
    test("Renders with no errors", () => {
        const { getByTestId } = TestingUtils.renderComponent(<LaunchList items={items} filter={""} sort={false} />);
        const launchListComponent = getByTestId("launch-list-component");
        expect(launchListComponent).not.toBeNull();
    });

    test("Renders with correct launchItems length", () => {
        const { getByTestId, getAllByTestId } = TestingUtils.renderComponent(<LaunchList items={items} filter={""} sort={false} />);
        const launchListComponent = getByTestId("launch-list-component");
        expect(launchListComponent).not.toBeNull();
        const launchItemComponent = getAllByTestId("launchItem-component");
        expect(launchItemComponent.length).toBe(2);
    });

    test("Renders with correct launchItems length when filtered with 2006", () => {
        const { getByTestId, getAllByTestId } = TestingUtils.renderComponent(<LaunchList items={items} filter={"2005"} sort={false} />);
        const launchListComponent = getByTestId("launch-list-component");
        expect(launchListComponent).not.toBeNull();
        const launchItemComponent = getAllByTestId("launchItem-component");
        expect(launchItemComponent.length).toBe(1);
    });

    test("Renders with sorted descending launchItems", () => {
        const { getByTestId, getAllByTestId } = TestingUtils.renderComponent(<LaunchList items={items} filter={""} sort={true} />);
        const launchListComponent = getByTestId("launch-list-component");
        expect(launchListComponent).not.toBeNull();
        const launchItemComponent = getAllByTestId("launchItem-component");
        expect(launchItemComponent.length).toBe(2);

        const launchDetailsFirst = launchItemComponent[0].getElementsByClassName("launch-list__item-details");
        let spans = launchDetailsFirst[1].children[0].getElementsByTagName("span");
        expect(spans[0].textContent).toBe(moment(items[0].launch_date_local).format("Do MMMM YYYY"));

        const launchDetailsSecond = launchItemComponent[1].getElementsByClassName("launch-list__item-details");
        spans = launchDetailsSecond[1].children[0].getElementsByTagName("span");
        expect(spans[0].textContent).toBe(moment(items[1].launch_date_local).format("Do MMMM YYYY"));
    });

    test("Renders with sorted ascending launchItems", () => {
        const { getByTestId, getAllByTestId } = TestingUtils.renderComponent(<LaunchList items={items} filter={""} sort={false} />);
        const launchListComponent = getByTestId("launch-list-component");
        expect(launchListComponent).not.toBeNull();
        const launchItemComponent = getAllByTestId("launchItem-component");
        expect(launchItemComponent.length).toBe(2);

        const launchDetailsFirst = launchItemComponent[0].getElementsByClassName("launch-list__item-details");
        let spans = launchDetailsFirst[1].children[0].getElementsByTagName("span");
        expect(spans[0].textContent).toBe(moment(items[1].launch_date_local).format("Do MMMM YYYY"));

        const launchDetailsSecond = launchItemComponent[1].getElementsByClassName("launch-list__item-details");
        spans = launchDetailsSecond[1].children[0].getElementsByTagName("span");
        expect(spans[0].textContent).toBe(moment(items[0].launch_date_local).format("Do MMMM YYYY"));
    });
});
