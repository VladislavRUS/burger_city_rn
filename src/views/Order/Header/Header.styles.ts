import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;
  background-color: #000;
  margin-bottom: 16px;
`;

export const TitleWrapper = styled.View``;
export const SummaryWrapper = styled.View`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OrderWrapper = styled(Row)`
  margin-bottom: 10px;
`;

export const ChargeWrapper = styled(Row)`
  margin-bottom: 39px;
`;

export const PriceWrapper = styled.View`
  margin-left: auto;
`;

export const TotalWrapper = styled(Row)``;
