import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { CryptoContainer } from './src/components';
import FullData from './src/components/FullData'
import { View } from 'react-native';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={CryptoContainer} options={{title: 'Cryptocurrencies'}} />
      <Stack.Screen name="FullData" component={FullData} options={({ route }) => (
        {
         //@ts-ignore
        title: route.params.name 
        })}/>
    </Stack.Navigator>
    // </NavigationContainer>

  )
}

export default StackNav