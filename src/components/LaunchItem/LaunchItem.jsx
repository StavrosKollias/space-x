import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
    //missing rocket name
    const { flight_number, mission_name, launch_date_utc, rocket } = item;
    const { rocket_name } = rocket;
    const dateFormat = moment(launch_date_utc).format("Do MMMM YYYY");
    return (
        <li key={index}>
            <div>
                <span>{`#${flight_number}`}</span>
                <span>{`${mission_name}`}</span>
            </div>
            <div>
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
