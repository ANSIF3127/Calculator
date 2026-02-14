import React from 'react';
import Button from './Button';
import './Keypad.css';

const Keypad = ({ onButtonClick }) => {
    const buttons = [
        { label: 'AC', type: 'action' },
        { label: '+/-', type: 'action' },
        { label: '%', type: 'action' },
        { label: '÷', type: 'operator' },
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: '×', type: 'operator' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '-', type: 'operator' },
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '+', type: 'operator' },
        { label: '0', type: 'zero' },
        { label: '.' },
        { label: '=', type: 'operator' },
    ];

    return (
        <div className="keypad">
            {buttons.map((btn) => (
                <Button
                    key={btn.label}
                    label={btn.label}
                    type={btn.type}
                    onClick={onButtonClick}
                />
            ))}
        </div>
    );
};

export default Keypad;
