import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import * as Images from '../../store/images';

export const Wrapper = styled.View`
  flex: 1;
`;

export const CenteredWrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FakeMapImage = styled(FastImage).attrs({
  source: Images.fake_map,
})`
  flex: 1;
`;
