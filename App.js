import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calendar from './src/Pages/Calendar';
import Details from './src/Pages/Details';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Search from './src/Pages/Search';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen 
        name="Details" 
        component={Details}
        />
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{ headerShown: false }}
       />
        <Stack.Screen 
        name="Register" 
        component={Register}
        options={{ headerShown: false }}
       />
        <Stack.Screen 
        name="Search" 
        component={Search}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Calendar" 
        component={Calendar}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
   
    </NavigationContainer>
  );
}

export default App;

