import axios from 'axios';

const urlBase = 'https://rickandmortyapi.com/api';

const instance = axios.create({
    baseURL: urlBase
})

export default instance