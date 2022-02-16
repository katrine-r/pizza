const API_URL = process.env.REACT_APP_API_URL

 class DataService {
    static async fetchData() {
        const response = await fetch(`${API_URL}/data`)
        const data = await response.json()
        return data
    }

    static async filterData(filter) {
        const response = await fetch(`${API_URL}/data?tags_like=${filter}`)
        const data = await response.json()
        return data
    }

    static async fetchFilters() {
        const response = await fetch(`${API_URL}/filters`)
        const filters = await response.json()
        return filters
    }
}

export default DataService