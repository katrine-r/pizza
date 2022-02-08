import React, { useEffect, useState } from 'react'
import './styless.css'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import CardsList from '../../components/CardsList'
import DataService from '../../api/DataService'
import { useDispatch } from 'react-redux'
import { getData } from '../../store/actions/home'

const HomePage = () => {

    const [categoriesList, setCategoriesList] = useState([
        {id: 1, text: 'Все', active: true},
        {id: 2, text: 'Мясные', active: false},
        {id: 3, text: 'Вегетарианская', active: false},
        {id: 4, text: 'Гриль', active: false},
        {id: 5, text: 'Острые', active: false},
        {id: 6, text: 'Закрытые', active: false}
    ])

    const [cards, setCards] = useState([
        {id: Date.now(), name: 'Чизбургер-пицца', dough: '', size: '', price: 395, active: false},
        {id: Date.now(), name: 'Сырная', dough: '', size: '', price: 450, active: false},
        {id: Date.now(), name: 'Креветки по-азиатски', dough: '', size: '', price: 290, active: false},
        {id: Date.now(), name: 'Сырный цыпленок', dough: '', size: '', price: 385, active: false},
        {id: Date.now(), name: 'Гавайская', dough: '', size: '', price: 370, active: false},
        {id: Date.now(), name: 'Карбонара', dough: '', size: '', price: 380, active: false},
        {id: Date.now(), name: 'Охотничья', dough: '', size: '', price: 400, active: false},
        {id: Date.now(), name: 'Пеперони', dough: '', size: '', price: 370, active: false},
    ])

    const [doughList, setDoughList] = useState([
        {id: 1, text: 'тонкое', active: true},
        {id: 2, text: 'традиционное', active: false}
    ])

    const [sizeList, setSizeList] = useState([
        {id: 1, text: '26 см', active: true},
        {id: 2, text: '30 см', active: false},
        {id: 3, text: '40 см', active: false}
    ])

    const onClickCategoriesHandler = (id) => {
        console.log('id_categories', id);
        const activeCategories = categoriesList.map((i) => {
            if (i.id === id) {
                return {...i, active: true}
            } else { 
                return {...i, active: false}
            }
        })
        setCategoriesList(activeCategories)
    }

    const onClickDoughPizzaHandler = (id, idCard) => {
        console.log('id_size', id);
        const activeDough = doughList.map((i) => {
            if (i.id === id) {
                return {...i, active: true}  
            } else {
                return {...i, active: false}
            }      
        })
        setDoughList(activeDough) 
    }

    const onClickSizePizzaHandler = (id, idCard) => {
        console.log('id_size', id);
        const activeSize = sizeList.map((i) => {
            if (i.id === id) {
                return {...i, active: true}  
            } else {
                return {...i, active: false}
            }      
        })
        setSizeList(activeSize)
    }

    const dispatch = useDispatch()

    useEffect(async () => {
        
        const data = await DataService.fetchData()
        console.log('data', data);
        dispatch(getData(data))

    }, [])

    return (
        <>
            <div className="content__top">
                <Filter 
                    categoriesList={categoriesList}
                    onClickCategoriesHandler={onClickCategoriesHandler}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <CardsList 
                cards={cards} 
                doughList={doughList} 
                sizeList={sizeList} 
                onClickDoughPizzaHandler={onClickDoughPizzaHandler}
                onClickSizePizzaHandler={onClickSizePizzaHandler}
            />
        </>
    )
}

export default HomePage