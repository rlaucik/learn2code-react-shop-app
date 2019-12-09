import React from 'react';

export class StateCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCounter: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Click
        </button>
        <p>
          <strong>Klikol si {this.state.clickCounter} x</strong>
        </p>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      clickCounter: this.state.clickCounter + 1
    });
  }
}