import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
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

class Home extends React.Component<NavigationScreenProps & InjectedIntlProps> {
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

  private headerTexts = ['home.greatest', 'home.tasty', 'home.tryIt'];

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

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
                  {this.formatMessage({ id: text })}
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
          title={this.formatMessage({ id: 'home.trackHere' })}
          subtitle={this.formatMessage({ id: 'home.trackHereSubtitle' })}
          onPress={this.onTrack}
        />
        <StickersSpacer />
        <Sticker
          title={this.formatMessage({ id: 'home.orderHere' })}
          subtitle={this.formatMessage({ id: 'home.orderHereSubtitle' })}
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
            {this.formatMessage({ id: 'home.bestOffers' })}
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
    const { navigation } = this.props;
    navigation.navigate(Routes.TRACK_NAVIGATOR);
  };

  private onOrder = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.BURGERS_NAVIGATOR);
  };
}

export default injectIntl(Home);
