import React from 'react';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import { CartHeaderRight } from '../../components/CartHeaderRight';
import { Sticker } from '../../components/Sticker';
import { Text } from '../../components/Text';
import { Routes } from '../../constants/Routes';
import Combo from '../../models/Combo';
import { Store } from '../../store';
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

class Home extends React.Component<NavigationScreenProps> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.navigate(Routes.CART);

    return {
      title: 'BurgerCity',
      headerRight: <CartHeaderRight onPress={onPress} />,
    };
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
              <BestOffer combo={combo} onPress={this.onComboPress} />
            </BestOfferWrapper>
          ))}
        </OffersList>
      </BestOffersWrapper>
    );
  }

  private onComboPress = (combo: Combo) => {
    Store.setCurrentCombo(combo);

    const { navigation } = this.props;
    navigation.navigate(Routes.CUSTOMIZE);
  };

  private onTrack = () => {
    console.log('onTrack');
  };

  private onOrder = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.BURGERS);
  };
}

export default Home;
