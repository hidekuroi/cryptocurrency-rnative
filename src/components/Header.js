import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.header}>
            Cryptocurrency App
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 40,
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

// const {headerContainer, header} = styles;

export default Header
