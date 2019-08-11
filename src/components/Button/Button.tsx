import React from 'react';
import Loader from '../Loader/Loader';
import { Wrapper } from './Button.styles';

interface IButtonProps {
  onPress: () => void;
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  isLoading = false,
  children,
}) => (
  <Wrapper onPress={onPress}>
    {isLoading ? <Loader color={'#fff'} /> : children}
  </Wrapper>
);

export default Button;
