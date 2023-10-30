import axios from "@/node_modules/axios/index";

const API_KEY = 'c754b08fe02f3ee3b42b9f1cdbcdd79f'
const API_BASE_URL = "https://api.themoviedb.org/3/movie/550?api_key"

const client = axios.create({
    baseURL: API_BASE_URL,
    params: { api_key: API_KEY }
})

export const searchMovie = async (query: string) => {
    try {
        const response = await client.get('/search/movie', {
            params: { query, },
        })
        if (response.data && response.data.results) {
            return response.data.results
        } else {
            console.log("Couldn't get the data");

        }
    } catch (error) {
        console.log(error);
        return []

    }
}