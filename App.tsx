import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/components/BottomTabs'
import Store from './src/store';
import {Header, CryptoContainer} from './src/components'
import { getCurrency } from './src/Reducers/CryptoReducer';
import StackNav from './StackNav';



export default function App() {
  // const dispatch = useDispatch()

  // console.log(state)
  // useEffect(() => {
  //   getCurrency()
    
  // }, [state])
  

  return (
    <Provider store={Store}>
      {/* <View> */}
        {/* <Header /> */}
        {/* <CryptoContainer /> */}
        <StackNav />
        <StatusBar style="auto" />
        {/* <BottomTabs /> */}
      {/* </View> */}
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