import React, { useEffect, useRef } from 'react';
import './Display.css';

const Display = ({ value, expression }) => {
    const displayRef = useRef(null);

    // Auto-resize text if it gets too long
    useEffect(() => {
        const node = displayRef.current;
        if (node) {
            const length = value.length;
            if (length > 10) node.style.fontSize = '3rem';
            else if (length > 7) node.style.fontSize = '4rem';
            else node.style.fontSize = '5rem';
        }
    }, [value]);

    return (
        <div className="display-container">
            <div className="expression">{expression}</div>
            <div className="current-value" ref={displayRef}>
                {value}
            </div>
        </div>
    );
};

export default Display;
