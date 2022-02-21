import React from 'react';
import SortLabelIcon from '../../icons/SortLabelIcon';

const Sort = ({setFilter}) => {
    return (
        <div className="sort">
            <div className="sort__label">
                <SortLabelIcon />
                <b>Сортировка по:</b>
                <span>популярности</span>
            </div>
            <div className="sort__popup">
                <ul>
                    <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                </ul>
            </div>
        </div>
    )
}

export default Sort