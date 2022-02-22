import React, { useState } from 'react';
import SortLabelIcon from '../../icons/SortLabelIcon';
import classNames from 'classnames';

const filters = [
    {
        title: 'цене',
        sortName: 'price'
    },
    {
        title: 'алфавиту',
        sortName: 'title'
    }
]

const Sort = ({setFilter}) => {

    const [popupIsVisible, setPopupIsVisible] = useState(false)
    const [isActive, setIsActive] = useState('sort')

    const togglePopup = () => {
        setPopupIsVisible(!popupIsVisible)
    }

    const changeFilter = (name, value = '') => {
        setFilter(prev => ({
            ...prev, 
            [name]: value
        }))
        setIsActive(name)
        setPopupIsVisible(!popupIsVisible)
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <div 
                    className={classNames(
                        'sort__icon',
                        {['sort__icon--active']: !popupIsVisible})
                    }
                >
                    <SortLabelIcon />
                </div>
                
                <b>Сортировка по:</b>
                <span
                    onClick={togglePopup}
                >
                    {/* популярности */}
                    {filters.find(i => i.sortName === isActive)?.title || isActive}
                </span>
            </div>

            {popupIsVisible && 
                <div className="sort__popup">
                    <ul>
                        {/* <li className="active">популярности</li> */}
                        {/* <li onClick={() => changeFilter('price', 'asc')}>цене</li>
                        <li onClick={() => changeFilter('title', 'asc')}>алфавиту</li> */}
                        {filters?.map(i => (
                            <li 
                            key={i?.sortName}
                            className={isActive === i?.sortName && 'active'}
                            onClick={() => changeFilter(i?.sortName, 'asc')}
                            >
                                {i?.title}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort