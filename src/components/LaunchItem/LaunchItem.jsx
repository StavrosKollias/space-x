import React from "react";

export const LaunchItem = ({ item, index }) => {
  //missing rocket name
  const { flight_number, mission_name, launch_date_utc } = item;

  return (
    <li key={index}>
      <div>
        <span>{`#${flight_number}`}</span>
        <span>{`${mission_name}`}</span>
      </div>
      <div>
        <span>
          {/* use moment here */}
          <span>{launch_date_utc}</span>
          {/* missing rocket name */}
        </span>
      </div>
    </li>
  );
};
