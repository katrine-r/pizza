import React from 'react';
import './_pizza-block.scss'
import AddIcon from '../../icons/AddIcon';
import Button from '../UI/Button';
import DoughItem from '../DoughItem'
import SizeItem from '../SizeItem'

const CardsItem = ({
    name,  
    price, 
    doughList, 
    sizeList, 
    onClickDoughPizzaHandler, 
    onClickSizePizzaHandler
}) => {

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>

            <div className="pizza-block__selector">
                <ul>
                    {doughList.map((item, index) => {
                        return (
                            <DoughItem
                                key={index}
                                id={item.id}
                                text={item.text}
                                active={item.active}
                                onClickDoughPizzaHandler={onClickDoughPizzaHandler}
                            />
                        )
                    })}
                </ul>
                <ul>
                    {sizeList.map((item, index) => {
                        return (
                            <SizeItem 
                                key={index}
                                id={item.id}
                                text={item.text}
                                active={item.active}
                                onClickSizePizzaHandler={onClickSizePizzaHandler}
                            />
                        )
                    })}
                </ul>
            </div>

            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button>
                    <AddIcon />
                    <span>Добавить</span>
                    <i>2</i>
                </Button>
            </div>
        </div>
    )
}

export default CardsItem
