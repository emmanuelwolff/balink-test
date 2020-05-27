import React from 'react';
import get from 'lodash.get'
import {compose} from 'redux';
import {connect} from 'react-redux';

const DEFAULT_LANG = 'EN';

const translations = {
    'Beneficiary' : {'FR': 'Beneficiaire'},
    'Address' : {'FR': 'Adresse'},
    'Contactability' : {'FR': 'Informations de contact'},
    'Last Name' : {'FR': 'Nom de famille'},
    'First Name' : {'FR': 'Prenom'},
    'Title' : {'FR': 'Titre'},
    'Country' : {'FR': 'Pays'},
    'City' : {'FR': 'Ville'},
    'Street' : {'FR': 'Rue'},
};


const Intl = (Component) => {
    return props => {
        const {lang = DEFAULT_LANG, intlField, ...otherProps} = props;
        if (lang === DEFAULT_LANG){
            return <Component {...otherProps} />
        }
        const newValue = get(translations, `${get(otherProps, props.intlField)}.${lang}`) || props[intlField];
        otherProps[intlField] = newValue;
        return <Component {...otherProps} />; 
    };
}

const connectedIntl = compose(connect(state => ({lang: state.settings.lang}), null), Intl);

export default connectedIntl;
