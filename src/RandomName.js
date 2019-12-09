import React from 'react';

export function RandomName() {
    const names = ['World', 'React', 'Rado'];
    const randomNumber = Math.floor(Math.random() * names.length);
    return (
        <div>Hello <strong>{names[randomNumber]}</strong></div>
    )
}