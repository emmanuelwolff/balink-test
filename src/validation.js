
export const getErrors = (fields) => {
    if (Array.isArray(fields)){
        const ret = fields.reduce((errors, field) => {
            if (field.required && !field.value){
                errors = errors || {};
                errors[field.name] = 'required';
            }
            else if (!validate(field.value, field.type)){
                errors = errors || {};
                errors[field.name] = field.type;
            }
            return errors;
        }, null);
        return ret;
    }
};

const validate = (value, type) => {
    if (type == 'email'){
        // TODO - make the regex more robust
        return /\S+@\S+\.\S+/.test(value);
    }
    if (type == 'phone'){
        // TODO - this validation is very weak, should be strengthened
        return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value);
    }
    return true;
}
