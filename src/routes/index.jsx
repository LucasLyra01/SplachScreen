import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../components/SplashScreen';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Routes;
