import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 6px;
  elevation: 3;
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
