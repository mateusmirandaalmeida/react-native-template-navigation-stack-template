import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
`

export const Text = styled.Text`
  color: ${props => props.theme.fontColor};
  font-size: 24px;
`;

export const CircleLoading = styled.ActivityIndicator`
  margin-top: 24px;
`