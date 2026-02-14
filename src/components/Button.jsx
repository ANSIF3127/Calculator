import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'default', className = '' }) => {
  return (
    <button
      className={`calc-btn ${type} ${className}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
