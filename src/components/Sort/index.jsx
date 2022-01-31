import React from 'react';
import SortLabel from '../../icons/SortLabel';

const Sort = () => {
    return (
        <div className="sort">
            <div className="sort__label">
                <SortLabel />
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