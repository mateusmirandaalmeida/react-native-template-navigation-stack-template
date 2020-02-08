import React from 'react'

import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

import { ThemeProvider } from 'styled-components'
import { useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator } from '@react-navigation/compat'

import { ThemeDefault } from './theme/theme-default'
import { ThemeDark } from './theme/theme-dark'

import { SplashStack } from './stacks/splash-stack'
import { AppStack } from './stacks/app-stack'


const Stacks = createSwitchNavigator({
  Splash: SplashStack,
  App: AppStack,
})

export const App = () => {
  const scheme = useColorScheme()

  return (
    <ThemeProvider theme={scheme === 'dark' ? ThemeDark : ThemeDefault}>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </ThemeProvider>
  )
}