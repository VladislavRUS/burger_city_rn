import React from 'react';
import Sticker from '../../components/Sticker/Sticker';
import { Text } from '../../components/Text';
import Combo from '../../models/Combo';
import Mock from '../../store/Mock';
import { BestOffer } from './BestOffer';
import {
  BestOffersWrapper,
  BestOfferWrapper,
  HeaderBackground,
  HeaderWrapper,
  OffersList,
  OffersTitleWrapper,
  StickersSpacer,
  StickersWrapper,
  StyledSwiper,
  SwiperSlide,
  Wrapper,
} from './Home.styles';

class Home extends React.Component {
  public static navigationOptions = {
    title: 'Burger City',
  };

  private headerTexts = [
    'World`s Greatest \nBurgers.',
    'Tasty And Incredibly \nDelicious.',
    'You Should Definitely \nTry It.',
  ];

  public render() {
    return (
      <Wrapper>
        {this.renderHeader()}
        {this.renderStickers()}
        {this.renderBestOffers()}
      </Wrapper>
    );
  }

  private renderHeader() {
    return (
      <HeaderWrapper>
        <HeaderBackground>
          <StyledSwiper
            autoplay={true}
            autoplayTimeout={3}
            scrollEnabled={false}
            dotColor={'transparent'}
            activeDotColor={'transparent'}
          >
            {this.headerTexts.map((text: string, index: number) => (
              <SwiperSlide key={index}>
                <Text fontSize={28} fontWeight={700} color={'#fff'}>
                  {text}
                </Text>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </HeaderBackground>
      </HeaderWrapper>
    );
  }

  private renderStickers() {
    return (
      <StickersWrapper>
        <Sticker
          title={'Track Here'}
          subtitle={'Login to continue Burger City'}
          onPress={this.onTrack}
        />
        <StickersSpacer />
        <Sticker
          title={'Order Here'}
          subtitle={'Login to continue Burger City'}
          onPress={this.onOrder}
        />
      </StickersWrapper>
    );
  }

  private renderBestOffers() {
    return (
      <BestOffersWrapper>
        <OffersTitleWrapper>
          <Text fontSize={20} fontWeight={700} color={'#000'}>
            Best Offers
          </Text>
        </OffersTitleWrapper>
        <OffersList horizontal={true} showsHorizontalScrollIndicator={false}>
          {Mock.combos.map((combo: Combo, index: number) => (
            <BestOfferWrapper key={combo.id} marginLeft={index === 0 ? 22 : 0}>
              <BestOffer combo={combo} />
            </BestOfferWrapper>
          ))}
        </OffersList>
      </BestOffersWrapper>
    );
  }

  private onTrack = () => {
    console.log('onTrack');
  };

  private onOrder = () => {
    console.log('onOrder');
  };
}

export default Home;
