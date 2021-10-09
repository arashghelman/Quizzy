import React from 'react';
import styles from './FancyButton.module.css';

function FancyButton(props) {
    const {children, type} = props;
    
    return (
      <button className={`${styles[`FancyButton`]} ${styles[`FancyButton_type-${type}`]}`}>
          {children}
      </button>  
    );
}

export default FancyButton;