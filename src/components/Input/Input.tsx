import React from 'react';
import { IconWrapper, StyledInput, Wrapper } from './Input.styles';

interface IInputProps {
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
  icon?: React.ReactNode;
  isSecured?: boolean;
  autoFocus?: boolean;
}

const Input: React.FC<IInputProps> = ({
  onChangeText,
  value,
  icon = null,
  isSecured = false,
  placeholder = '',
  autoFocus = false,
}) => (
  <Wrapper>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={isSecured}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  </Wrapper>
);

export default Input;
