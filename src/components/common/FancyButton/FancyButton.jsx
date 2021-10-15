import React from 'react';
import styles from './FancyButton.module.scss';

function FancyButton(props) {
    const {children, type, onButtonClicked} = props;
    
    return (
      <button className={`${styles[`FancyButton`]} ${styles[`FancyButton_type${type}`]}`} 
              onClick={onButtonClicked}>
          {children}
      </button>  
    );
}

export default FancyButton;