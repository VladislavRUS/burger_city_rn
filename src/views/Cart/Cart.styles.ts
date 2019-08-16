import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  flex: 1;
`;

export const EmptyWrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollableWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 100,
  },
})`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 90px;
  padding: 0 14px 0 20px;
  background-color: #000;
`;

export const PriceWrapper = styled.View`
  margin-left: auto;
`;

export const OrderItemsWrapper = styled.View`
  padding: 20px 20px 0 20px;
`;

export const IncludedTextWrapper = styled.View`
  margin-bottom: 10px;
`;

export const PromoWrapper = styled.View`
  padding: 0 20px;
`;

export const PromoTextWrapper = styled.View`
  margin-bottom: 14px;
`;

export const BottomButtonWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;
