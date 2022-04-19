import axios from 'axios';
import APIKey from './APIKey';

const instance = axios.create({
    baseURL: 'https://api.coinmarketcap.com/',
    withCredentials: true,
    headers: {
        'X-CMC_PRO_API_KEY': APIKey
    }
});

export const mainAPI = {
    getCurrency() {
        console.log('dasda')
        return instance.get<any>(`v1/ticker/?limit=10`)
        .then(response => console.log('sdadsa'))
    },
}
