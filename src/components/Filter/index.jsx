import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Filter = ({setFilter}) => {

    const { filters } = useSelector(state => state.home)

    const [isActive, setIsActive] = useState('')

    const changeFilter = (value = '') => {
        setFilter(prev => ({...prev, tags: value}))
        setIsActive(value)
    }

    return (
        <div className="categories">
            <ul>
                <li 
                    className={isActive === '' && "active"} 
                    onClick={() => changeFilter()}
                >
                    Все
                </li>
                {filters?.map(i => (
                    <li 
                        key={i}
                        className={isActive === i && "active"}
                        onClick={() => changeFilter(i)}
                    >{i}</li>
                ))}
              </ul>
        </div>
    )
}

export default Filter