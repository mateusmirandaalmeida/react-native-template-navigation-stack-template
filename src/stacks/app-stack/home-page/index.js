import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Text,
} from './styles'

export const HomePage = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Text>Home Page</Text>
    </Container>
  )
}