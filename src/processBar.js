import React from 'react';
import {STEPS} from './App';
import {progressConnector} from './redux/connectors';
import Intl from './intl/intl';

const ProcessBar = ({progress = {}}) => {
    const currentStep = progress.currentStep || 1;
    return <div className="form-steps">
            <ul>
                {Object.entries(STEPS).map(([key, step]) => (
                    <Step {...step} key={key} name={key} currentStep={currentStep} intlField={'title'}/>
                ))}
            </ul>
        </div>
};

const Step = Intl(({title, name, currentStep}) => {
    return <li className={`form-step ${+name === currentStep ? 'filling' : (+name < currentStep ? 'filled' : '')}`}>
        <div className="step-container">
            <div className="step">{name}</div>
            <div className="step-desc">{title}</div>
        </div>
    </li>;
})

export default progressConnector(ProcessBar);
 
