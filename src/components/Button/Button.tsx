import React from 'react';
import Loader from '../Loader/Loader';
import { Wrapper } from './Button.styles';

interface IButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  isLoading = false,
  isDisabled = false,
  children,
}) => (
  <Wrapper onPress={onPress} isDisabled={isDisabled} disabled={isDisabled}>
    {isLoading ? <Loader color={'#fff'} /> : children}
  </Wrapper>
);

export default Button;
