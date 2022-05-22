import React from "react";

export const Button = ({ classes, label, onClick }) => {
    return (
        <button data-testid='button-component' onClick={onClick} className={classes}>
            {label}
        </button>
    );
};
