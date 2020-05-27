import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from './actions';
import update from 'immutability-helper';


const settings = (state = {}, action) => {
    if (action.type === actions.CHANGE_LANG){
        return {
            ...state,
            lang: action.lang
        };
    }
    if (action.type === actions.SET_LANG){
        return {
            ...state,
            langs: action.langs
        };
    }
    return state;
}

const data = (state = {}, action) => {
    if (action.type === actions.UPDATE_FIELD){
        return update(state, {
            [action.step]: {
                [action.index]: {
                    value: {$set: action.value}
                }
            }
        });
    }
    return state;
}

const errors = (state = {}, action) => {
    if (action.type === actions.RESET_ERRORS){
        return {};
    }
    if (action.type === actions.SET_ERRORS){
        return action.errors;
    }
    return state;
}

const progress = (state = {}, action) => {
    if (action.type === actions.NEXT_STEP){
        return {
            ...state,
            currentStep: state.currentStep + 1
        };
    }
    if (action.type === actions.PREVIOUS_STEP){
        return {
            ...state,
            currentStep: state.currentStep - 1
        };
    }
    if (action.type === actions.DONE){
        return {
            ...state,
            done: true
        }
    }
    return state;
}

const rootReducer = combineReducers({
    settings,
    data,
    progress,
    errors
});

export default function getStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
};

