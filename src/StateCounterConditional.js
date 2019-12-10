import React from 'react';

export class StateCounterConditional extends React.Component {
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
        <StateCounterMessage numberOfClicks={this.state.clickCounter} />
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      clickCounter: this.state.clickCounter + 1
    });
  }
}

const StateCounterMessage = (props) => {
  if (props.numberOfClicks > 3) {
    return <p>
      Mám dosť!
    </p>
  }
  return <p>
    <strong>Klikol si {props.numberOfClicks} x</strong>
  </p>
}
