import React from 'react';
import { FilteredInputView } from './FilteredInputView';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', null];

export class FilteredInputContainer extends React.Component {
    constructor(props) {
        super(props);

        this.cursorPos = null;
    }
    
    render() {
        const { label, value } = this.props;
        inputRef.selectionStart = this.cursorPos;
        inputRef.selectionEnd = this.cursorPos;
        return (
            <FilteredInputView
                label={label}
                value={value}
                inputRef={inputRef}
                onChange={this.onChange}
            />
        );
    }

    onChange = event => {
        console.log(event.nativeEvent.data);
        if (numbers.includes(event.nativeEvent.data)) {
            this.props.onChange(event);
        }
        this.cursorPos = event.currentTarget;
    }
}
