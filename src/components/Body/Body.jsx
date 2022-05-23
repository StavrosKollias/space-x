import React from "react";
import CONSTANTS from "../../constants/Config";
import LABEL from "../../constants/Labels";
import { LaunchList } from "../LaunchList";
import { Button } from "../Button";
import { Select } from "../Select";
import { Loader } from "../Loader";

import { useLaunchContext } from "../../contexts/LaunchContext";

export const Body = () => {
    const { filter, setSort, sort, items, launchYears, loadingState } = useLaunchContext();

    return (
        <div data-testid='body-component' className='app__body'>
            <div>
                <img src={CONSTANTS.SPACE_X_IMAGE} srcSet={CONSTANTS.SPACE_X_RETINA_IMAGES} className='app__main-image' alt='Launch Home' />
            </div>

            {(loadingState.loading || loadingState.error) && <Loader />}

            {!loadingState.loading && !loadingState.error && items.length > 0 && (
                <div className='app__launches'>
                    <div className='app__filters'>
                        <Select classes='select' label={LABEL.FILTER_BY_YEAR} testId='filter-button-test' options={launchYears} />
                        <Button filter={filter} classes='button button--sort' onClick={() => setSort(!sort)} label={sort ? LABEL.ASC : LABEL.DESC} />
                    </div>
                    <LaunchList items={items} filter={filter} sort={sort} />
                </div>
            )}
        </div>
    );
};
