import React from 'react';

export const ProductSearchFilter = ({ onChange }) =>
    <div>
        <label htmlFor="search">Search:</label>
        <input id="search" onChange={onChange} />
    </div>
