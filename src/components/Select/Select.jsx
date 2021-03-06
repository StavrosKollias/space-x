import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, options, allowDisabledState }) => {
    const { setFilter, filter } = useLaunchContext();
    const selectClasses = cx(classes, {
        disabled: allowDisabledState ? error : "",
    });
    return (
        <select
            data-testid='select-component'
            name={label}
            className={selectClasses}
            onChange={(event) => {
                setFilter(event.target.value);
            }}
            value={filter}>
            <option data-testid='select-option' value=''>
                {label}
            </option>

            {options.map((item, index) => {
                return (
                    <option data-testid='select-option' key={index} value={item}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
};
