import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Text,
  CircleLoading,
} from './styles'

export const SplashPage = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => navigation.navigate('App'), 2000)
  }, [])

  return (
    <Container>
      <Text>Splah Page</Text>
      <CircleLoading size="large" />
    </Container>
  )
}