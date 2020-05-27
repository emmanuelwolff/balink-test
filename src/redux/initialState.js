
const INITIAL_STATE = {
    settings: {
        lang: 'EN',
    },
    data: {
        personal: [
            {name: 'firstname', value: '', placeholder: 'First Name', type: 'text', required: true},
            {name: 'lastname', value: '', placeholder: 'Last Name', type: 'text', required: true},
            {name: 'title', value: '', placeholder: 'Title', type: 'text', required: false}
        ],
        address: [
            {name: 'country', value: '', placeholder: 'Country', type: 'text', required: true},
            {name: 'city', value: '', placeholder: 'City', type: 'text', required: false},
            {name: 'street', value: '', placeholder: 'Street', type: 'text', required: false},
        ],
        contactability: [
            {name: 'email', value: '', placeholder: 'Email', type: 'email', required: true},
            {name: 'phone', value: '', placeholder: 'Phone', type: 'phone', required: false},
            {name: 'optin', value: '', placeholder: '', type: 'text', required: false},
        ]
    },
    progress: {
        currentStep: 1,
        done: false
    },
    errors: {

    }
};

export default INITIAL_STATE;
