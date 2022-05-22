import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabs from './src/components/BottomTabs'
import Settings from './src/components/Settings'
import Store from './src/store';
import StackNav from './StackNav';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



export default function App() {
  // const dispatch = useDispatch()

  // console.log(state)
  // useEffect(() => {
  //   getCurrency()
    
  // }, [state])
  

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Cryptocurrencies') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-stats-chart'
                      : 'ios-stats-chart-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-cog' : 'ios-cog-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        >
          <Tab.Screen name="Cryptocurrencies" component={StackNav}  />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
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