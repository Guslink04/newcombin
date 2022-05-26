import { useState } from 'react';

const insertMinus = (formattedValue, index) => {
    formattedValue = formattedValue.replace(/^[a-zA-Z\s]*$/g, '');
    if (formattedValue.length == index + 1) {
        if (formattedValue[index] !== '-') {
            formattedValue = formattedValue.split('');
            formattedValue.splice(index, 0, '-');
            formattedValue = formattedValue.join('');
        }
    }
    return formattedValue;
}

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const resetForm = () => {
        setValues(initialState);
    }
    const setValueByEvent = ({ target }) => {
        if (!target.name) {
            console.error("Missing name attr");
        }
        if (target.name == "firstName" || target.name == "lastName") {
            let formattedValue = target.value.replace(/[0-9]/g, '');;
            target.value = formattedValue;
        }
        if (target.name == "ssn") {
            let formattedValue = target.value;
            formattedValue = insertMinus(formattedValue, 3);
            formattedValue = insertMinus(formattedValue, 6);
            formattedValue = formattedValue.length > 11 ? formattedValue.substring(0, 11) : formattedValue;
            target.value = formattedValue;
        }
        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    return [values, setValueByEvent, resetForm];
}