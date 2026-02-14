import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);
    const [expression, setExpression] = useState('');

    const calculate = (a, b, op) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (op === '+') return (num1 + num2).toString();
        if (op === '-') return (num1 - num2).toString();
        if (op === '×') return (num1 * num2).toString();
        if (op === '÷') {
            if (num2 === 0) return 'Error';
            return (num1 / num2).toString();
        }
        return b;
    };

    const handleButtonClick = (label) => {
        if (!isNaN(label) || label === '.') {
            if (waitingForNewValue) {
                setDisplayValue(label === '.' ? '0.' : label);
                setWaitingForNewValue(false);
            } else {
                if (label === '.') {
                    if (!displayValue.includes('.')) {
                        setDisplayValue(displayValue + label);
                    }
                } else {
                    setDisplayValue(displayValue === '0' ? label : displayValue + label);
                }
            }
        } else if (label === 'AC') {
            setDisplayValue('0');
            setPreviousValue(null);
            setOperator(null);
            setWaitingForNewValue(false);
            setExpression('');
        } else if (label === '+/-') {
            if (displayValue !== '0') {
                setDisplayValue((parseFloat(displayValue) * -1).toString());
            }
        } else if (label === '%') {
            setDisplayValue((parseFloat(displayValue) / 100).toString());
        } else if (['+', '-', '×', '÷'].includes(label)) {
            if (operator && !waitingForNewValue) {
                const result = calculate(previousValue, displayValue, operator);
                setDisplayValue(result);
                setPreviousValue(result);
            } else {
                setPreviousValue(displayValue);
            }
            setOperator(label);
            setWaitingForNewValue(true);
            setExpression(`${displayValue} ${label}`);
        } else if (label === '=') {
            if (operator && previousValue) {
                const result = calculate(previousValue, displayValue, operator);
                setDisplayValue(result);
                setPreviousValue(null);
                setOperator(null);
                setWaitingForNewValue(true);
                setExpression('');
            }
        }
    };

    return (
        <div className="calculator">
            <Display value={displayValue} expression={expression} />
            <Keypad onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;
