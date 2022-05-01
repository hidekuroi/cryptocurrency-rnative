import axios from 'axios';
import APIKey from './APIKey';

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    //withCredentials: true,
    // headers: {
    //     'x-ba-key': APIKey
    // }
});

export const mainAPI = {
    getCurrency() {
        console.log('dasda')
        return instance.get<any>(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        .then(response => response.data)
    },
}
