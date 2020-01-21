import React from 'react';
import PropTypes from 'prop-types';

export const FilteredInputView = ({ label, onChange, value, inputRef }) => {
    return (
    <fieldset>
        <p>
            <label htmlFor={label}>
                {label}
            </label>
        </p>
        <input
            ref={inputRef}
            id={label}
            type="text"
            value={value}
            onChange={onChange}
        />
    </fieldset>)
};

FilteredInputView.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string,
};
