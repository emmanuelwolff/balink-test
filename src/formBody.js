import React from 'react';
import PropTypes from 'prop-types';
import {STEPS, ERRORS} from './App';
import {dataConnector} from './redux/connectors';
import get from 'lodash.get';
import Intl from './intl/intl';


const fieldTypeToInputType = (type) => {
    if (type === 'email'){
        return 'email';
    }
    return 'text';
};

const FormBody = (props) => {
    const stepKey = get(STEPS, `${props.currentStep}.key`);
    const fields = get(props.data, stepKey);
    return <form className="form-body" > 
        {fields.map((field, index) => (
            <FormField field={field} 
                       error={props.errors[field.name]} 
                       key={field.name}
                       placeholder={field.placeholder}
                       intlField={'placeholder'}
                       onChange={(value) => props.updateField(stepKey, index, value)}
            />
        ))}
        <Buttons step={props.currentStep} 
                 next={props.nextStep} 
                 previous={props.previousStep}
                 submit={props.submit}/>
    </form>
};

export default dataConnector(FormBody);


const FormField = Intl(({field, placeholder, error, onChange}) => {
    const inputType = fieldTypeToInputType(field.type);
    return <div className="field">
        <input type={inputType} 
               name={field} 
               value={field.value} 
               placeholder={`${placeholder} ${field.required? '*': ''}`} 
               onChange={(e) => onChange(get(e, 'target.value'))}
        />
        {error && <div className="error-field">{ERRORS[error]}</div>}
    </div>;
}); 

FormField.propTypes = {
    field: PropTypes.object.isRequired,
    error: PropTypes.string
};

const Buttons = ({step, next, previous, submit}) => {
    return (
        <div className="buttons">
            {step > 1 && <Button onClick={previous} label="PREVIOUS" />}
            {step < 3 && <Button onClick={next} label="NEXT" />}
            {step === 3 && <Button onClick={submit} label="SUBMIT" />}
        </div>
    );
}

const Button = ({label, onClick}) => {
    return <button onClick={(e) => {e.preventDefault(); onClick()}}>{label}</button>;
}

Button.defaultProps = {
    onClick: () => {}
}
