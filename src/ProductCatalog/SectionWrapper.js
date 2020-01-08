import React from 'react';

const style = {
    border: '4px solid silver',
    minWidth: '500px',
    marginBottom:'1em',
    padding: '0.5em',
    float: 'left',
    clear: 'both',
};

export const SectionWrapper = props => (
    <div style={style}>
        {props.children}
    </div>
);
