import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomePage } from './home-page'

const Stack = createStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  )
}