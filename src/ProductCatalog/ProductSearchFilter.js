import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export const ProductSearchFilter = ({ onChange }) =>
    <SectionWrapper>
        <label htmlFor="search"><strong>Search:</strong></label><br/>
        <input id="search" onChange={onChange} />
    </SectionWrapper>
