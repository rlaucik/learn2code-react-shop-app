import React from 'react';
import PropTypes from 'prop-types';

const style = {
    background: 'red',
    color: 'white',
    padding: '10px',
}

const ValidationMessage = ({ value, label, isFormSent, formValidation }) => {
    if (!value && isFormSent) {
        return (
            <p style={style}>
                Prosím, vyplňte povinné pole {label}
            </p>
        );
    }
    if (formValidation && !formValidation.test(value) && isFormSent) {
        return (
            <p style={style}>
                Vložená hodnota je v nesprávnom tvare!
            </p>
        );
    }
    return null;
}

ValidationMessage.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isFormSent: PropTypes.bool.isRequired,
    formValidation: PropTypes.instanceOf(RegExp),
};
