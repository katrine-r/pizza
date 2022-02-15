import { GET_DATA, SET_FILTERS } from "../types"

export const getData = payload => {
    return {
        type: GET_DATA,
        payload
    }
}

export const setFilters = payload => {
    return {
        type: SET_FILTERS,
        payload
    }
}