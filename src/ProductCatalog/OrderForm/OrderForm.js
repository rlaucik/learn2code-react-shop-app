import React from 'react';

export class OrderForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            address: '',
            isFormSent: false,
        };
    }

    render() {
        const {
            isFormSent,
            name,
            email,
            address,
        } = this.state;

        if (isFormSent && name && email && address) {
            return (
                <>
                    <p>
                        Vážený {name}, prijali sme vašu objednávku na adresu {address}, potvrdenie vám príde na e-mail {email}
                    </p>
                </>
            );
        }

        return (
            <div style={{maxWidth: '500px'}}>
                <ValidatedInput
                    label="Meno"
                    isFormSent={isFormSent}
                    onChange={this.onChangeName}
                    value={name}
                />
                <ValidatedInput
                    label="E-mail"
                    isFormSent={isFormSent}
                    onChange={this.onChangeEmail}
                    value={email}
                />
                <ValidatedInput
                    label="Adresa"
                    isFormSent={isFormSent}
                    onChange={this.onChangeAddress}
                    value={address}
                />
                <p>
                    <button
                        onClick={this.onFormSent}
                    >
                        Odoslať
                    </button>
                </p>
            </div>
        );
    }

    onChangeName = event => { this.setState({ name: event.target.value, isFormSent: false }) }
    onChangeEmail = event => { this.setState({ email: event.target.value, isFormSent: false }) }
    onChangeAddress = event => { this.setState({ address: event.target.value, isFormSent: false }) }

    onFormSent = () => { this.setState({ isFormSent: true }) }

}

class ValidatedInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { label, onChange, isFormSent, value } = this.props;
        return (
            <fieldset>
                <p>
                <label htmlFor={label}>
                    {label}
                </label>
                </p>
                <input
                    id={label}
                    type="text"
                    onChange={onChange}
                />
                <ValidationMessage
                    isFormSent={isFormSent}
                    label={label}
                    value={value}
                />
            </fieldset>
        );
    }
}

const validationMessageStyle = {
    background: 'red',
    color: 'white',
    padding: '10px',
}

const ValidationMessage = ({ value, label, isFormSent }) => {
    if (!value && isFormSent) {
        return (
            <p style={validationMessageStyle}>
                Prosím, vyplňte povinné pole {label}
            </p>
        );
    }
    return null;
}
