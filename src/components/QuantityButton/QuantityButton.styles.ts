import styled from 'styled-components/native';

export const RoundWrapper = styled.TouchableOpacity`
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background-color: rgba(114, 124, 142, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
`;

export const Content = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
