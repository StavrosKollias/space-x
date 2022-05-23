import React from "react";
import { LaunchItem } from "../LaunchItem";

export const LaunchList = ({ items, filter, sort }) => {
    let filteredItems = [...items];

    if (filter !== "") {
        //write filter function below
        filteredItems = filteredItems.filter((value) => {
            return value.launch_year === filter;
        });
    }

    //Bug in the sorting function below
    const launches = filteredItems.sort((a, b) => {
        const x = new Date(a.launch_date_local);
        const y = new Date(b.launch_date_local);
        return sort ? y.getTime() - x.getTime() : x.getTime() - y.getTime();
    });

    return (
        <ul data-testid='launch-list-component' className='launch-list'>
            {launches.map((item, index) => {
                return <LaunchItem key={index} item={item} index={index} />;
            })}
        </ul>
    );
};
