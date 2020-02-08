import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SplashPage } from './splash-page'

const Stack = createStackNavigator()

export const SplashStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashPage" component={SplashPage} />
    </Stack.Navigator>
  )
}