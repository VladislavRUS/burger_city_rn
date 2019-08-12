import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(96, 100, 112, 0.1);
`;

export const IconWrapper = styled.View`
  margin-right: 14px;
`;

export const StyledInput = styled.TextInput`
  font-size: 14px;
  font-weight: 600;
  color: rgb(114, 124, 142);
  flex-grow: 1;
`;
