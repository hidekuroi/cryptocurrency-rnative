import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, FlatList, ScrollView, RefreshControl, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import { CoinItem, getCurrency } from '../Reducers/CryptoReducer';
import CryptoCard from './CryptoCard';

const CryptoContainer = (props: any, {navigation}: any) => {
    console.log(navigation)
    console.log(props.crypto.crypto)
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false)
    const cards = props.crypto.crypto.map((i: CoinItem, index: number) => <TouchableOpacity onPress={() => navigation.navigate('FullData', i)}><CryptoCard key={index} data={i}/></TouchableOpacity>)

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
            {props.crypto.crypto.length > 0 ?
            <FlatList style={{backgroundColor: "#FFF"}} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={alertfunc} />} data={props.crypto.crypto} renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('FullData', item)}>
                    <CryptoCard key={index} data={item}/>
                </TouchableOpacity>
            )} />
        :
        <ActivityIndicator style={{marginTop: 10}}/>}
            {/* {cards} */}
            <Text>{`\n \n \n \n \n `}
            </Text>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return{
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer)