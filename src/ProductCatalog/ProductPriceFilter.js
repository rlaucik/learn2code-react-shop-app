import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export class ProductPriceFilter extends React.Component {

    render() {
        return (
            <SectionWrapper>
                <strong>Price:</strong><br/>
                <label htmlFor="filter-from">from </label>
                <input id="filter-from" onChange={this.onChangeFrom} />
                <label htmlFor="filter-to">to </label>
                <input id="filter-to" onChange={this.onChangeTo} />
            </SectionWrapper>
        );
    }

    onChangeFrom = event => {
        this.props.onChangeFrom(event);
    }
    
    onChangeTo = event => {
        this.props.onChangeTo(event);
    }
}
