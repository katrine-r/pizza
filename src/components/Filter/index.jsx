import React from 'react';
import FilterItem from '../FilterItem'

const Filter = ({categoriesList, onClickCategoriesHandler}) => {
    return (
        <div className="categories">
            <ul>
               {categoriesList.map((item, index) => {
                   return (
                        <FilterItem
                            key={index}
                            id={item.id}
                            text={item.text}
                            active={item.active}
                            onClickCategoriesHandler={onClickCategoriesHandler}
                        />
                   ) 
               })} 
            </ul>
        </div>
    )
}

export default Filter