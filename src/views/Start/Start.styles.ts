import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import backgroundImg from '../../../assets/images/bg-darken.png';
const { width, height } = Dimensions.get('window');

export const Wrapper = styled.View`
  flex: 1;
`;

export const ScrollableWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;

export const ImageBackground = styled.Image.attrs({ source: backgroundImg })`
  position: absolute;
  left: 0;
  top: 0;
  width: ${width}px;
  height: ${height}px;
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
  margin-top: 60px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.View`
  margin-top: 85px;
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
  margin-bottom: 26px;
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 35px;
`;

export const TextButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const TextButtonWrapper = styled.View`
  margin-left: auto;
`;

export const CheckboxWrapper = styled.View`
  margin-right: 4px;
`;

export const TextWrapper = styled.View`
  margin-top: 30px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
