import { GET_DATA, SET_FILTERS_LIST } from '../types'

const initialState = {
    data: [],
    filters: []
}

const homeReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload
            }
        case SET_FILTERS_LIST:
            return {
                ...state,
                filters: payload
            }
        default:
            return state
    }
}

export default homeReducer