import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  margin-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  margin-left: 5px;
`;

export const Image = styled(FastImage)`
  padding-left: 20px;
  width: 16px;
  height: 11px;
`;
