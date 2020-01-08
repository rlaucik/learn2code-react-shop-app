import React from 'react';
import PropTypes from 'prop-types';

import { SectionWrapper } from '../SectionWrapper';

const validations = {
    name: /\w+\s\w+/,
    email: /^(\w+)@(\w+\.\w+)$/,
    zip: /^\d+$/,
}

const defaultFormState = {
    name: '',
    email: '',
    address: '',
    zip: '',
    isFormSent: false,
}

export class OrderForm extends React.Component {
    constructor() {
        super();
        this.state = defaultFormState;
    }

    render() {
        const {
            isFormSent,
            name,
            email,
            address,
            zip,
        } = this.state;

        const areAllFieldsInValidFormat = Object.keys(validations).every(
            field => validations[field].test(this.state[field])
        );
        if (isFormSent && name && email && address && zip && areAllFieldsInValidFormat) {
            return (
                <>
                    <p>
                        Vážený {name}, prijali sme vašu objednávku na adresu {address}, potvrdenie vám príde na e-mail {email}
                    </p>
                </>
            );
        }

        return (
            <SectionWrapper>
                <ValidatedInput
                    label="Meno a priezvisko"
                    isFormSent={isFormSent}
                    onChange={this.onChangeName}
                    value={name}
                    formValidation={validations.name}
                />
                <ValidatedInput
                    label="E-mail"
                    isFormSent={isFormSent}
                    onChange={this.onChangeEmail}
                    value={email}
                    formValidation={validations.email}
                />
                <ValidatedInput
                    label="Ulica a číslo"
                    isFormSent={isFormSent}
                    onChange={this.onChangeAddress}
                    value={address}
                />
                <ValidatedInput
                    label="PSČ"
                    isFormSent={isFormSent}
                    onChange={this.onChangeZIP}
                    value={zip}
                    formValidation={validations.zip}
                />
                <p>
                    <button
                        onClick={this.onFormReset}
                    >
                        Vymazať formulár
                    </button>
                    <button
                        onClick={this.onFormSent}
                    >
                        Odoslať
                    </button>
                </p>
            </SectionWrapper>
        );
    }

    onChangeName = event => { this.setState({ name: event.target.value, isFormSent: false }) }
    onChangeEmail = event => { this.setState({ email: event.target.value, isFormSent: false }) }
    onChangeAddress = event => { this.setState({ address: event.target.value, isFormSent: false }) }
    onChangeZIP = event => { this.setState({ zip: event.target.value, isFormSent: false }) }

    onFormReset = () => { this.setState(defaultFormState) }
    onFormSent = () => { this.setState({ isFormSent: true }) }

}

const ValidatedInput = ({ label, onChange, isFormSent, value, formValidation }) => (
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
            <ValidationMessage
                formValidation={23}
            />
        </fieldset>
);

ValidatedInput.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.bool,
    isFormSent: PropTypes.bool.isRequired,
    value: PropTypes.string,
    formValidation: PropTypes.instanceOf(RegExp),
};

const validationMessageStyle = {
    background: 'red',
    color: 'white',
    padding: '10px',
}

const ValidationMessage = ({ value, label, isFormSent, formValidation }) => {
    if (!value && isFormSent) {
        return (
            <p style={validationMessageStyle}>
                Prosím, vyplňte povinné pole {label}
            </p>
        );
    }
    if (formValidation && !formValidation.test(value) && isFormSent) {
        return (
            <p style={validationMessageStyle}>
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
