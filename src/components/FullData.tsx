import React, { useEffect } from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { useDispatch, useSelector } from 'react-redux';
import { getChartHistory } from '../Reducers/CryptoReducer';
import { actions } from '../Reducers/CryptoReducer';

const setChartHistory = actions.setChartHistory


const styles = StyleSheet.create({
  text: {
    margin: 30
  },
  image: {
      margin: 20,
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
      marginTop: 35,
      marginLeft: 10,
      marginRight: 5,
      fontWeight: "bold",        
  },
  coinName: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 20
  },
  seperator: {
      marginTop: 35,
      marginLeft: 80
  },
  coinPrice: {
      marginTop: 35,
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




const chartClick = (data: any) => {
  console.log(data)
  Alert.alert(
    `${data.value}`,
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
}


const FullData = (item: any) => {
  const dispatch = useDispatch()
  const chartHistory = useSelector((state: any) => {return state.crypto.chart})
  console.log(chartHistory[30])

useEffect(() => {
  //@ts-ignore
  dispatch(getChartHistory(item.route.params.id, 'usd'))
  return () => {
    dispatch(setChartHistory([]))
  }
}, [])

    console.log(item)
  return (
    <View>
      <View style={styles.upperRow}>
        <Image source={{uri: item.route.params.image}}
            style={styles.image} />
        <Text style={styles.coinSymbol}>{item.route.params.symbol.toUpperCase()}</Text>
        <Text style={styles.seperator}>|</Text>
        <Text style={styles.coinPrice}>{item.route.params.current_price}
                <Text style={styles.moneySymbol}> $</Text>
        </Text>
      </View>
        
        <Text style={styles.text}>{item.route.params.name}</Text>
        <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["","","","","","","","","","","","","","","","","","","","","","","","","","", "", "", "", "Yesterday", "Today"],
      datasets: [
        {
          data: chartHistory
        }
      ]
    }}
    width={Dimensions.get("window").width - 10} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
    onDataPointClick={chartClick}
  />
</View>
    </View>
  )
}

export default FullData