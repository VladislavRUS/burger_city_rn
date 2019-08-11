import styled from 'styled-components/native';
import backgroundImg from '../../../assets/images/bg-darken.png';

export const Wrapper = styled.ImageBackground.attrs({ source: backgroundImg })`
  flex: 1;
`;

export const StartedWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 80px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const BigTitleWrapper = styled.View`
  max-width: 150px;
  margin-bottom: 52px;
`;

export const LoginWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  padding-top: 120px;
`;

export const LogoWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.View`
  width: 100%;
`;

export const TitleWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const InputsWrapper = styled.View`
  margin-bottom: 17px;
  width: 100%;
`;

export const InputWrapper = styled.View`
  margin-bottom: 18px;
`;

export const BottomWrapper = styled.View`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
`;

export const TextButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;

export const TextButtonWrapper = styled.View`
  margin-left: auto;
`;
