import React from 'react';
import Langs from './langs';
import ProcessBar from './processBar';
import FormComp from './formComp';
import {progressConnector} from './redux/connectors';

export const STEPS = {
    1 : {
        key: 'personal',
        title: 'Beneficiary'
    }, 
    2: {
        key: 'address',
        title: 'Address'
    },
    3: {
        key: 'contactability',
        title: 'Contactability'
    }
};

export const TABS = [
    {label: 'PERSONAL', active: true},
    {label: 'BUSINESS', active: false}
];

export const ERRORS = {
    'required': 'This field is required',
    'email': 'The email is not formatted correctly',
    'phone': 'The phone number is not formatted correctly'
};

const App = (props) => {
    return (
        <div className="container">
            {props.progress.done? 'Your data has been saved' :
            <>
                <Langs /> 
                <ProcessBar />
                <FormComp tabs={TABS} />
        </>}
    </div>
    );
};

export default progressConnector(App);


