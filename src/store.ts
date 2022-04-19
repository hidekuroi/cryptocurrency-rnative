import {Platform} from 'react-native'
import {createStore, applyMiddleware, compose} from 'redux'
// import devTools from 'remote-redux-devtools'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import RootReducer from './Reducers'

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        // devTools({
        //     name: Platform.OS,
        //     hostname: 'localhost',
        //     port: 19006
        // }),
    )
);

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>

export default Store