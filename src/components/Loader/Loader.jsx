import React from "react";
import LABEL from "../../constants/Labels";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Loader = () => {
    const { loadingState } = useLaunchContext();
    return (
        <div data-testid='loader-component' className='loader'>
            {loadingState.loading && !loadingState.error && (
                <div className='bounce' data-testid='loader-bounce-component'>
                    <div className='bounce__ball'></div>
                    <div className='bounce__ball'></div>
                    <div className='bounce__ball'></div>
                    <div className='bounce__ball'></div>
                </div>
            )}

            {loadingState.error && !loadingState.loading && (
                <svg data-testid='loader-error-component' fill='none' height='56' viewBox='0 0 56 56' width='56' xmlns='http://www.w3.org/2000/svg'>
                    <rect fill='none' height='56' width='56' />
                    <circle cx='28' cy='28' r='26' stroke='#DA1E28' strokeLinecap='round' strokeWidth='4' />
                    <path d='M18.3076 18.8071L36.6924 37.1919' stroke='#DA1E28' strokeLinecap='round' strokeWidth='4' />
                    <path d='M18.3066 37.1924L36.6914 18.8076' stroke='#DA1E28' strokeLinecap='round' strokeWidth='4' />
                </svg>
            )}

            <span data-testid='loader-msg'>{loadingState.error ? LABEL.ERROR : LABEL.LOADING}</span>
        </div>
    );
};
