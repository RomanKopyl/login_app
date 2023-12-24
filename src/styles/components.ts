import styled from "styled-components/native";

export
  const STouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  border-radius: 8px;  
  height: 50px;
  background-color: ${props => props.theme.main};
`;

// Text
export const InputHeaderText = styled.Text`
  color: white; 
  font-size: 10;
  line-height: 12;
  font-weight: 400;
`

export const LinkText = styled.Text`
  color: '#EB0057';
  font-size: 11;
  line-height: 13;
  font-weight: 500;
  opacity: 0.5;
  text-decoration: underline;
`
export const BodyText = styled.Text`
  color: white; 
  font-size: 12;
  line-height: 13;
`
export const FieldText = styled.Text`
  color: #818181; 
  font-size: 12;
  line-height: 15;
  font-weight: 400;
`

export const ButtonText = styled.Text`
  color: white; 
  font-size: 12;
  line-height: 15;
  font-weight: 700;
`
export const SubTitleText = styled.Text`
  color: white; 
  font-size: 16;
  line-height: 20;
  font-weight: 500;
`
export const HeaderText = styled.Text`
  color: white; 
  font-size: 18;
  line-height: 22;
  font-weight: 600;
  text-transform: uppercase;
`