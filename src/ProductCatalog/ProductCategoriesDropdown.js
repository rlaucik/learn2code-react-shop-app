import React from 'react';

export const ProductCategoriesDropdown = (props) =>
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
