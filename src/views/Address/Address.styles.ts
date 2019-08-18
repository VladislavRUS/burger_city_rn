import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 20px;
  flex: 1;
`;

interface IDescriptionWrapperProps {
  isValid: boolean;
}

export const DescriptionWrapper = styled.TouchableOpacity<
  IDescriptionWrapperProps
>`
  padding: 0 20px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.isValid ? 1 : 0.6)};
`;
