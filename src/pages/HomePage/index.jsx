import React, { useEffect, useState } from 'react'
import './styless.css'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import CardsList from '../../components/CardsList'
import DataService from '../../api/DataService'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/actions/home'

const HomePage = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.home)

    // const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        
        const data = await DataService.fetchData()
        console.log('data', data);
        dispatch(getData(data))
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
                ? <p>Loading...</p>
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