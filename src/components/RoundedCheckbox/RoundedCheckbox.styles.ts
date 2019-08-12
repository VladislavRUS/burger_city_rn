import styled from 'styled-components/native';

interface ICheckboxProps {
  isActive: boolean;
}

export const Checkbox = styled.View<ICheckboxProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${props =>
    props.isActive ? 'rgba(255, 255, 255, 0.6)' : 'transparent'};
  ${{ borderWidth: 1 }};
  ${{ borderColor: 'rgba(255, 255, 255, 0.6)' }};
`;
