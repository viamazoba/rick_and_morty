import axios from 'axios'

const urlBase = 'https://rickandmortyapi.com/api';

const instance = axios.create({
    baseURL: urlBase
})
 
const fetcher = url => instance.get(url).then(res => res.data)

export default fetcher