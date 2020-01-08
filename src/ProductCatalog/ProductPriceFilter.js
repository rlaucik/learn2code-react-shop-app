import React from 'react';

export class ProductPriceFilter extends React.Component {

    render() {
        return (
            <div>
                <strong>Price:</strong><br/>
                <label for="filter-from">from </label>
                <input id="filter-from" onChange={this.onChangeFrom} />
                <label for="filter-to">to </label>
                <input id="filter-to" onChange={this.onChangeTo} />
            </div>
        );
    }

    onChangeFrom = event => {
        this.props.onChangeFrom(event);
    }
    
    onChangeTo = event => {
        this.props.onChangeTo(event);
    }
}
