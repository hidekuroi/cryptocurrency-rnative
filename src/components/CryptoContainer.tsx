import React, {Component, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import { getCurrency } from '../Reducers/CryptoReducer';

const CryptoContainer = (props: any) => {
    console.log(props.crypto.crypto)
    const dispatch = useDispatch();

    useEffect(() => {
        //@ts-ignore
      dispatch(getCurrency())
     
    }, [])
    
    
    return(
        <View>
            <Text>Container</Text>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return{
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer)