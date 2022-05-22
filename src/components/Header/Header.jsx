import React from "react";
import debounce from "lodash.debounce";
import LABEL from "../../constants/Labels";
import { SpaceXLogo } from "../Icons";
import { Button } from "../../components/Button";
import { useLaunchContext } from "../../contexts/LaunchContext/LaunchContext";

export const Header = () => {
    const { filter, listLaunches } = useLaunchContext();
    const debouncedClickHandler = debounce(listLaunches, 300);
    return (
        <header data-testid='header-component' className='app__header'>
            <div data-testid='header-logo-container' className='app__logo'>
                <img data-testid='header-logo-container-img' className='app__logo-image' src={SpaceXLogo} alt={"Space X Logo"} />
                <span data-testid='header-logo-container-txt' className='app__logo-txt'>
                    {LABEL.LAUNCHES}
                </span>
            </div>
            <Button
                data-testid='reload-button'
                filter={filter}
                onClick={() => {
                    debouncedClickHandler();
                }}
                classes='button button--reload'
                label={LABEL.RELOAD}
                allowDisabledState={false}
            />
        </header>
    );
};
