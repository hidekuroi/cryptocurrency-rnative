import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect, useDispatch } from 'react-redux';

import Store from './src/store';
import {Header, CryptoContainer} from './src/components'
import { getCurrency } from './src/Reducers/CryptoReducer';

const state = Store.getState()


export default function App() {
  // const dispatch = useDispatch()

  // console.log(state)
  // useEffect(() => {
  //   getCurrency()
    
  // }, [state])
  

  return (
    <Provider store={Store}>
      <View>
        <Header />
        <Text>Tessdtsst</Text>
        <CryptoContainer />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// let mapStateToProps = (state) => ({
//   crypto: state.crypto
// })

// export default connect(mapStateToProps)(App)