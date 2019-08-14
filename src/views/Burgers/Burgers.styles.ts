import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const List = styled(FlatList)`
  flex: 1;
  background-color: transparent;
`;

interface IBurgerItemWrapperProps {
  isLast: boolean;
}

export const BurgerItemWrapper = styled.View<IBurgerItemWrapperProps>`
  margin-bottom: ${props => (props.isLast ? '0' : '14')}px;
`;
