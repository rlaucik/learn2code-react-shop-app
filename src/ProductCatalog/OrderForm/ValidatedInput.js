import React from 'react';
import PropTypes from 'prop-types';

import { ValidationMessage } from './ValidationMessage';

export const ValidatedInput = ({ label, onChange, isFormSent, value, formValidation }) => (
    <fieldset>
        <p>
            <label htmlFor={label}>
                {label}
            </label>
        </p>
        <input
            id={label}
            type="text"
            value={value}
            onChange={onChange}
        />
        <ValidationMessage
            formValidation={formValidation}
            isFormSent={isFormSent}
            label={label}
            value={value}
        />
    </fieldset>
);

ValidatedInput.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    isFormSent: PropTypes.bool.isRequired,
    value: PropTypes.string,
    formValidation: PropTypes.instanceOf(RegExp),
};
