import {connect} from 'react-redux';
import {updateField, nextStep, previousStep, changeLang, getLangs, submit} from './actions';

export const dataConnector = (component) => connect(
    state => ({
        data: state.data, 
        currentStep: state.progress.currentStep,
        errors: state.errors
    }), 
    {updateField, nextStep, previousStep, submit}
)(component);

export const progressConnector = (component) => connect(
    state => ({progress: state.progress})
)(component);

export const langConnector = (component) => connect(
    state => ({lang: state.settings.lang, langs: state.settings.langs}),
    {changeLang, getLangs: getLangs}
)(component);
