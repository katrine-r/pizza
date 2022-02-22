import classNames from 'classnames';
import React, { useState } from 'react';
import AddIcon from '../../icons/AddIcon';
import Button from '../UI/Button';

const CardItem = ({ data }) => {
    const {
        title,
        img,
        type,
        radius,
        price
    } = data

    const [totalPrice, setTotalPrice] = useState(price)
    const [conf, setConf] = useState({
        type: 1,
        radius: 1
    })

    const changeConf = (name, value, priceValue) => {
        setConf({
            ...conf,
            [name]: value
        })
        setTotalPrice(price + priceValue)
        // setConf(prev => {...prev, [name]: value})
    }
    
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={img}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {type?.map(i => (
                        <li 
                            key={i?.type}
                            className={classNames({active: i?.type === conf?.type})}
                            onClick={() => changeConf('type', i?.type, i?.price)}
                        >
                            {i?.title}
                        </li>
                    ))}
                </ul>
                <ul>
                    {radius?.map(i => (
                        <li 
                            key={i?.type}
                            className={classNames({active: i?.type === conf?.radius})}
                            onClick={() => changeConf('radius', i?.type, i?.price)}
                        >
                            {i?.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {totalPrice} ₽</div>.
                {/* <div className="pizza-block__price">от {price} ₽</div>. */}
                <Button>
                    <AddIcon />
                    <span>Добавить</span>
                    <i>2</i>
                </Button>
            </div>
        </div>
    )
}

export default CardItem