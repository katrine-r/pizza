import { GET_DATA, SET_FILTERS_LIST } from "../types"

export const getData = payload => {
    return {
        type: GET_DATA,
        payload
    }
}

export const setFiltersList = payload => {
    return {
        type: SET_FILTERS_LIST,
        payload
    }
}