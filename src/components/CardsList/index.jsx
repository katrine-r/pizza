import React from 'react';
import CardsItem from '../CardsItem';

const CardsList = ({
    cards, 
    doughList, 
    sizeList, 
    onClickDoughPizzaHandler, 
    onClickSizePizzaHandler
}) => {
    
    return (
        <div className="content__items">
            {cards.map((card, index) => {
                return (
                    <CardsItem
                        key={index}
                        id={card.id}
                        name={card.name}
                        dough={card.dough}
                        size={card.size}
                        price={card.price}
                        doughList={doughList} 
                        sizeList={sizeList}
                        onClickDoughPizzaHandler={onClickDoughPizzaHandler}
                        onClickSizePizzaHandler={onClickSizePizzaHandler}
                    />
                )
            })}
        </div>
    )
}

export default CardsList