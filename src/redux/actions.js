import {getErrors} from '../validation.js';
import {STEPS} from '../App';

export const CHANGE_LANG = 'CHANGE_LANG';
export const SET_LANG = 'SET_LANG';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const NEXT_STEP = 'NEXT_STEP';
export const PREVIOUS_STEP = 'PREVIOUS_STEP';
export const DONE = 'DONE';
export const RESET_ERRORS = 'RESET_ERRORS';
export const SET_ERRORS = 'SET_ERRORS';


export const updateField = (step, index, value) => {
    return {
        type: UPDATE_FIELD,
        step,
        index,
        value
    }
};

export const nextStep = () => {
    return (dispatch, getState) => {
        const {progress = {}, data} = getState();
        const step = STEPS[progress.currentStep] || {};
        const errors = getErrors(data[step.key]);
        if (!errors){
            dispatch({type: RESET_ERRORS});
            dispatch({type: NEXT_STEP});
        }
        else{
            dispatch({type: SET_ERRORS, errors});
        }
    }
};

export const previousStep = () => {
    return (dispatch) => {
        dispatch({type: RESET_ERRORS});
        dispatch({type: PREVIOUS_STEP});
    }
};

export const submit = () => {
    return (dispatch, getState) => {
        const {progress = {}, data} = getState();
        const step = STEPS[progress.currentStep] || {};
        const errors = getErrors(data[step.key]);
        if (!errors){
            const formData = getValues(getState().data);
            fetch('/api/form', {
                method: 'POST', 
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(response => {
                if (!response.ok){
                    throw new Error('error');
                }
                dispatch({type: DONE});
            }).catch(() => alert('An error occured while saving your data!'));
        }
        else{
            dispatch({type: SET_ERRORS, errors});        
        }
    };
};

export const changeLang = (lang) => {
    return {
        type: CHANGE_LANG,
        lang
    };
};

export const getLangs = () => {
    return (dispatch) => {
        fetch('/api/langs')
            .then(response => response.json())
            .then(langs => dispatch({type: SET_LANG, langs}));
    }
};

const getValues = (data) => {
    const values = {};
    for (const step in data){
        values[step] = {};
        data[step].forEach(field => {values[step][field.name] = field.value});
    }
    return values;
};
