import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
})`
  flex: 1;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 15px;
`;

export const Image = styled(FastImage)`
  border-radius: 6px;
  height: 200px;
  width: 100%;
  margin-bottom: 35px;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CartButtonWrapper = styled.View`
  margin-left: 8px;
  flex-shrink: 0;
  width: 186px;
`;

export const ButtonWrapper = styled.View`
  flex-grow: 1;
`;
