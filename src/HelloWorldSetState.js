import React from 'react';

export class HelloWorldSetState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            helloMessage: ''
        }
    }

    render() {
        return (
            <>
                <button onClick={this.showHello}>Click me!</button>
                <p>{this.state.helloMessage}</p>
            </>
        );
    }

    showHello = () => {
        this.setState({
            helloMessage: 'Hello state!',
        });
    }
}
