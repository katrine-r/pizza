import React, { useEffect, useState } from 'react'
import './styless.css'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import CardsList from '../../components/CardsList'
import DataService from '../../api/DataService'
import { useDispatch, useSelector } from 'react-redux'
import { getData, setFilters } from '../../store/actions/home'
import Loader from '../../components/UI/Loader'

const HomePage = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.home)

    // const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        
        const data = await DataService.fetchData()
        const tags = [...new Set(data.map(i => i?.tags).flat())]
        console.log('data', data);

        dispatch(getData(data))
        dispatch(setFilters(tags))

        // setIsLoading(false)

    }, [])

    return (
        <>
            <div className="content__top">
                <Filter />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/* {isLoading  */}
                {!data?.length
                ? <Loader />
                : data?.map((i, index) => (
                    <CardsList
                        key={index}
                        data={i}
                    />
                  ))
                }
            </div>  
        </>
    )
}

export default HomePage