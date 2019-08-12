import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import headerBg from '../../../assets/images/home-bg.jpg';

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  height: 240px;
`;

export const HeaderBackground = styled.ImageBackground.attrs({
  source: headerBg,
})`
  position: relative;
  z-index: 0;
  height: 100%;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const SwiperSlide = styled.View`
  padding: 30px 20px;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StickersWrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
`;

export const StickersSpacer = styled.View`
  height: 15px;
`;

export const BestOffersWrapper = styled.View``;

export const OffersTitleWrapper = styled.View`
  margin-bottom: 17px;
  padding: 0 20px;
`;

export const OffersList = styled.ScrollView`
  height: 200px;
`;

interface IBestOfferWrapperProps {
  marginLeft: number;
}

export const BestOfferWrapper = styled.View<IBestOfferWrapperProps>`
  margin-left: ${props => props.marginLeft}px;
  margin-right: 22px;
`;
