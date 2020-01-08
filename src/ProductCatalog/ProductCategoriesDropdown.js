import React from 'react';
import PropTypes from 'prop-types';

import { SectionWrapper } from './SectionWrapper';

export const ProductCategoriesDropdown = (props) =>
    <SectionWrapper>
        <strong>Categories</strong><br />
        <select
            onChange={props.onChange}
            style={{ marginBottom: '10px' }}
        >
            <option value="0">
                All products
            </option>
            {props.categories.map(category =>
                <option
                    key={category.id}
                    value={category.id}
                >
                    {category.name}
                </option>
            )}
        </select>
    </SectionWrapper>

ProductCategoriesDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
}
