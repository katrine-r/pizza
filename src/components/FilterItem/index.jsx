import React from 'react';

const FilterItem = ({id, text, active, onClickCategoriesHandler}) => {
    return (
        <li 
            className={active ? 'active' : null}
            onClick={() => onClickCategoriesHandler(id)
        }>{text}</li>
    )
}

export default FilterItem
