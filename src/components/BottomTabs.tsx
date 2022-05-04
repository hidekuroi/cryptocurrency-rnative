import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: { position: 'absolute' },
        
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const Home = () => {
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}

const Settings = () => {
    return(
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default BottomTabs