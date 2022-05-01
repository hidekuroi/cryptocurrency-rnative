import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, FlatList, ScrollView, RefreshControl, Alert, ActivityIndicator} from 'react-native';
import { CoinItem, getCurrency } from '../Reducers/CryptoReducer';
import CryptoCard from './CryptoCard';

const CryptoContainer = (props: any) => {
    console.log(props.crypto.crypto)
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false)
    const cards = props.crypto.crypto.map((i: CoinItem, index: number) => <CryptoCard key={index} data={i}/>)

    useEffect(() => {
        //@ts-ignore
      dispatch(getCurrency())
     
    }, [])

    useEffect(() => {
        setRefreshing(false)
        console.log('DASDASDASDAS')
    }, [props.crypto.crypto])
//@ts-ignore
    // const Item = ({ title }) => (
    //     <View>
    //       <Text>{title}</Text>
    //     </View>
    //   );

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const alertfunc = () => {
        setRefreshing(true)
        //@ts-ignore
        dispatch(getCurrency())
        setRefreshing(false);
    }
    
    
    return(
        <View>
        <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={alertfunc} />}>
            {/* <FlatList data={props.crypto.crypto} renderItem={Item} keyExtractor={item => item.id}/> */}
            {cards}
            <Text>{`\n \n \n \n \n `}
            </Text>
        </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return{
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer)