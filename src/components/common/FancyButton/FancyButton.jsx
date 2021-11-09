import React from 'react';
import './FancyButton.css';

function FancyButton({custom, children, type, onButtonClicked}) {

    return (
      <button className={`py-2 px-6 rounded-3xl font-quicksand 
                        font-bold cursor-pointer
                        transition-all duration-300 ease-out
                        ${custom}
                        button-${type}`}
              onClick={onButtonClicked}>
          {children}
      </button>  
    );
}

export default FancyButton;