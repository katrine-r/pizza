import React from 'react';

const SizeItem = ({id, text, active, onClickSizePizzaHandler}) => {
    console.log('active', active);
   
    return (
        <li 
            className={active ? 'active' : null}
            onClick={() => onClickSizePizzaHandler(id)}
        >{text}</li>
    )
}

export default SizeItem