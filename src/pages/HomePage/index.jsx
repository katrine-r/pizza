import React, { useEffect, useState } from 'react'
import './styless.css'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import CardItem from '../../components/CardItem'
import DataService from '../../api/DataService'
import { useDispatch, useSelector } from 'react-redux'
import { getData, setFiltersList } from '../../store/actions/home'
import Loader from '../../components/UI/Loader'

const HomePage = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.home)
    
    const [filter, setFilter] = useState({
        tags: '',
        price: '',
        title: ''
    })

    useEffect(async () => {
        const data = await DataService.fetchData(filter)
        dispatch(getData(data))
        console.log('data', data);
    }, [filter])

    console.log('filter', filter)

    useEffect(async () => {
        const tags = await DataService.fetchFilters()
        dispatch(setFiltersList(tags))
        console.log('filters from HomePage', tags)
    }, [])

    return (
        <>
            <div className="content__top">
                <Filter
                    setFilter={setFilter}
                />
                <Sort
                    setFilter={setFilter}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {!data?.length
                ? <Loader />
                : data?.map((i, index) => (
                    <CardItem
                        // key={index}
                        key={i.img}
                        data={i}
                    />
                  ))
                }
            </div>  
        </>
    )
}

export default HomePage