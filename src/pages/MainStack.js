import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import PaginaInicial from './PaginaInicial';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStack = () => {
  return <MyStack />;
}

export default MainStack;