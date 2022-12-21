import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': "e3a14cbfd6mshce25c720da589fap131c6fjsn61b36c2940c6",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url: string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}