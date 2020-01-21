import React from 'react';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', null];

export class FilteredInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    render() {
        const { label } = this.props;
        const { value } = this.state;
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
                    value={value}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                />
            </fieldset>
        );
    }

    onChange = event => {
        if (numbers.includes(event.nativeEvent.data)) {
            this.setState({ value: event.target.value });
            this.props.onChange(event);
        }
    }
}
