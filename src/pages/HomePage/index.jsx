import React, { useEffect, useState } from 'react'
import './styless.css'
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'
import CardsList from '../../components/CardsList'
import DataService from '../../api/DataService'
import { useDispatch } from 'react-redux'
import { getData } from '../../store/actions/home'

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(async () => {
        
        const data = await DataService.fetchData()
        console.log('data', data);
        dispatch(getData(data))

    }, [])

    return (
        <>
            <div className="content__top">
                <Filter />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <CardsList />
        </>
    )
}

export default HomePage