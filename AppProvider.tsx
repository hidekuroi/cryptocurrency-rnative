import React, { useEffect } from 'react';
import { compose } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect, useDispatch } from 'react-redux';
import Store from './src/store';


const state = Store.getState()


export default function AppProvider() {

  

  return (
    <Provider store={Store}>
      <View>
        
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