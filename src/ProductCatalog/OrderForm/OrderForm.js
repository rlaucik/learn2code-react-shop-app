import React from 'react';

import { SectionWrapper } from '../SectionWrapper';
import { ValidatedInput } from './ValidatedInput';
import { OrderFormSuccess } from './OrderFormSuccess';
import { FormControlButtons } from './FormControlButtons';

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
            return <OrderFormSuccess
                name={name}
                email={email}
                address={address}
            />
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
                <FormControlButtons 
                    onSend={this.onFormSent}
                    onReset={this.onFormReset}
            />
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
