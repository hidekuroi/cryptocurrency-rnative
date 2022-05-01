import { InferActionsType } from './../store';
import { mainAPI } from "../api/api";

const SET_CURRENCY = 'crypto/SET-CURRENCY'

export type CoinItem = {
    ath: number,
    ath_change_percentage: number,
    ath_date: Date,
    atl: number,
    atl_change_percentage: number,
    atl_date: Date,
    circulating_supply: number,
    current_price: number,
    fully_diluted_valuation: number,
    high_24h: number,
    id: string,
    image: string,
    last_updated: Date,
    low_24h: number,
    market_cap: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    market_cap_rank: number,
    max_supply: number,
    name: string,
    price_change_24h: number,
    price_change_percentage_24h: number,
    roi: null,
    symbol: string,
    total_supply: number,
    total_volume: number
}

type InitialStateType = {
    crypto: Array<CoinItem> | [],
    isInitialized: boolean
}

const initialState = {
    crypto: [],
    isInitialized: false
}
//@ts-ignore
export default (state = initialState, action: ActionsTypes): InitialStateType => {
        switch(action.type) {
            case SET_CURRENCY:{
                const StateCopy = {...state, crypto: action.payload}
                return StateCopy
            }
        
            default:{
                return state
        }
    }
}

type ActionsTypes = InferActionsType<typeof actions>

export const actions = {
    setCurrency: (payload: any) => ({type: SET_CURRENCY, payload} as const),
}

export const getCurrency = () => {
    return async (dispatch: any) => {
       let data = await mainAPI.getCurrency();
            console.log('test')
            dispatch(actions.setCurrency(data));
    }
}