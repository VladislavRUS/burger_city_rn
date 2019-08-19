import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  flex: 1;
`;

export const ScrollableWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 70,
  },
})`
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
`;

export const OrderItemsWrapper = styled.View`
  padding: 0 20px;
  margin-top: 21px;
`;

export const TitleWrapper = styled.View``;
