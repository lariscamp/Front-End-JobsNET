import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-jobsnet-2021.herokuapp.com',
})

export default api;