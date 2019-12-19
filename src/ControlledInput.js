import React from 'react';

export class ControlledInput extends React.Component {
    constructor() {
        super();
        this.state = {
            myText: '',
        };
    }
    render() {
        return (
            <>
            <input value={this.state.myText} onChange={this.onInputChange} type="text" />
            <button onClick={this.sayHello}>Say hello</button>
            </>
        );
    }

    onInputChange = event => {
        this.setState({
            myText: event.target.value,
        });

    }

    sayHello = () => {
        this.setState({
            myText: 'Hello!',
        });
    }
}

