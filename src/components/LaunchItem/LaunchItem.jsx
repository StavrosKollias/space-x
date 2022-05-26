import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
    const { flight_number, mission_name, launch_date_utc, rocket } = item;
    const { rocket_name = "" } = rocket;
    const dateFormat = moment(launch_date_utc).format("Do MMMM YYYY");
    return (
        <li data-testid='launchItem-component' className='launch-list__item' key={index}>
            <div className='launch-list__item-details'>
                <span>{`#${flight_number}`}</span>
                <span>{`${mission_name}`}</span>
            </div>
            <div className='launch-list__item-details'>
                <span>
                    {/* use moment here */}
                    <span>{dateFormat}</span>
                    {/* missing rocket name */}
                    <span>{rocket_name}</span>
                </span>
            </div>
        </li>
    );
};
