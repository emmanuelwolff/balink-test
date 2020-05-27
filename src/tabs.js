import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({tabs}) => {
    return <div className="tabs">
        {tabs.map(tab => <div className={`tab ${tab.active? 'active': ''}`} key={tab.label}>{tab.label}</div>)}
    </div>;
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired
}

Tabs.defaultProps = {
    tabs : []
}

export default Tabs;
