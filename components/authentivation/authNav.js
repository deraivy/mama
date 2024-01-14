import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../splash';
import Blue from '../blue';

const Auth = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <NavigationContainer>
        <Auth.Navigator>
        <Auth.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Auth.Screen name='Blue' component={Blue}/>
        </Auth.Navigator>
    </NavigationContainer>
  )
}

export default AuthNav

const styles = StyleSheet.create({})
