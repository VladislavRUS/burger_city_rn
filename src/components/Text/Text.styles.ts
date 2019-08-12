import styled from 'styled-components/native';

interface IStyledTextProps {
  fontSize: number;
  fontWeight: number;
  color: string;
  isCentered: boolean;
}

export const StyledText = styled.Text<IStyledTextProps>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  text-align: ${props => (props.isCentered ? 'center' : 'left')};
`;
