import React from 'react';

export const FormControlButtons = ({ onReset, onSend }) => (
    <p>
        <button
            onClick={onReset}
        >
            Clear form
        </button>
        <button
            onClick={onSend}
        >
            Send
        </button>
    </p>
);
