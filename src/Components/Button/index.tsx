
import React from 'react';
import {  Container,  Title,  NavigationButton,  ButtonText,} from '../Button/style'

const Button: React.FC = () => {

  return (
    <>
      <Container>
      <Title> Style Component </Title>
      </Container>
      <NavigationButton onPress={() => console.log('OUAAA')}>
        <ButtonText>Criar Conta</ButtonText>
      </NavigationButton>      
    </>
  );
};

export default Button;