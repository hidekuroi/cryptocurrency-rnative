import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    text: {
        margin: 30
    }
})

const FullData = (item: any) => {
    console.log(item)
  return (
    <View>
        <Text style={styles.text}>{item.route.params.name}</Text>
    </View>
  )
}

export default FullData