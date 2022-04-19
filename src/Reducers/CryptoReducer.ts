import { InferActionsType } from './../store';
import { mainAPI } from "../api/api";

const SET_CURRENCY = 'crypto/SET-CURRENCY'

const initialState = {
    crypto: {},
    isInitialized: false
}

export default function(state = initialState, action: ActionsTypes) {
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