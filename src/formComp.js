import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './tabs';
import FormBody from './formBody';

const FormComp = (props) => {
    return <div className="form">
        {Array.isArray(props.tabs) && props.tabs.length && <Tabs tabs={props.tabs}/>}
        <FormBody />
    </div>;
}

export default FormComp;

FormComp.propTypes = {
    tabs: PropTypes.array,
}

