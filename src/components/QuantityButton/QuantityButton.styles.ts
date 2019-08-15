import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 52px;
  border-radius: 6px;
  elevation: 3;
  background-color: #fff;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

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
