import React from 'react';

const DoughItem = ({id, text, active, onClickDoughPizzaHandler}) => {
    return (
        <li 
            className={active ? 'active' : null}
            onClick={() => onClickDoughPizzaHandler(id)}
        >{text}</li>
    )
}

export default DoughItem