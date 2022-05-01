import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { CoinItem } from '../Reducers/CryptoReducer'

type PropsType = {
    data: CoinItem
}

const styles = StyleSheet.create({
    image: {
        width: 45,
        height: 45
    },
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 2,
        padding: 18
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",        
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",        
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const CryptoCard = (props: PropsType) => {
  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
            <Image source={{uri: props.data.image}}
            style={styles.image} />
            <Text style={styles.coinSymbol}>{props.data.symbol.toUpperCase()}</Text>
            <Text style={styles.seperator}>|</Text>
            <Text style={styles.coinName}>{props.data.name}</Text>
            <Text style={styles.coinPrice}>{props.data.current_price}
                <Text style={styles.moneySymbol}> $</Text>
            </Text>
        </View>
        <View style={styles.statisticsContainer}>
            <Text style={props.data.price_change_percentage_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus}>{props.data.price_change_percentage_24h}% in 24h</Text>
        </View>
        
    </View>
  )
}

export default CryptoCard