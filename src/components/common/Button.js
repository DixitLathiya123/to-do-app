import React from 'react';
import '../../styles/Button.css';

export const Button = ({ onClick, children, className }) => (
  <button className={`common-button ${className}`} onClick={onClick}>
    {children}
  </button>
);
