import styled from 'styled-components/native';

interface IImageProps {
  width: number;
  height: number;
}

export const Image = styled.Image<IImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
