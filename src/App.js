import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get'
import { Provider } from 'react-redux'
import getStore from './redux/store';
import INITIAL_STATE from './redux/initialState';
import Langs from './langs';
import ProcessBar from './processBar';
import FormComp from './formComp';
import {dataConnector} from './redux/connectors';

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
    'required': 'This field is required'
};

const store = getStore(INITIAL_STATE);

const App = (props) => {
    return (
        <Provider store={store}>
            <div className="container">
                <Langs /> 
                <ProcessBar />
                <FormComp tabs={TABS} />
            </div>
        </Provider>
    );
};

export default App;



