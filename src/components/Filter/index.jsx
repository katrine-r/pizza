import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataService from '../../api/DataService';
import { getData } from '../../store/actions/home';

// const filterData = [
//     'Мясные',
//     'Вегетарианская',
//     'Гриль',
//     'Острые'
// ]

const Filter = () => {

    const dispatch = useDispatch()
    const { filters } = useSelector(state => state.home)
    // console.log('data', data)

    // const tags = []

    // const tags = [...new Set(data.map(i => i?.tags).flat())]

    // data.forEach(i => {
    //     i.tags.forEach(j => {
    //         if (!tags.includes(j)) {
    //             tags.push(j)
    //         }
    //     })
    // })


    // console.log('tags', tags)
    // console.log(new Set(tags))

    const [isActive, setIsActive] = useState('')

    const fetchFilter = async (value = '') => {
        const data = await DataService.filterData(value)
        dispatch(getData(data))
        setIsActive(value)
    }

    return (
        <div className="categories">
            <ul>
                <li className={isActive === '' && "active"} onClick={() => fetchFilter()}>Все</li>
                {/* {filterData?.map(i => ( */}
                {filters?.map(i => (
                    <li 
                        key={i}
                        className={isActive === i && "active"}
                        onClick={() => fetchFilter(i)}
                    >{i}</li>
                ))}
              </ul>
        </div>
    )
}

export default Filter