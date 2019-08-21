import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { WebView } from 'react-native-webview';
import { NavigationScreenProp } from 'react-navigation';
import CartHeaderRight from '../../components/CartHeaderRight/CartHeaderRight';
import Loader from '../../components/Loader/Loader';
import { Text } from '../../components/Text';
import { Colors } from '../../constants/Colors';
import { Routes } from '../../constants/Routes';
import Coordinates from '../../models/Coordinates';
import Store from '../../store/Store';
import { map } from './map';
import { CenteredWrapper, Wrapper } from './Track.styles';

@observer
class Track extends React.Component {
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

  @observable
  private isInitialized = false;
  private coordinates!: Coordinates;
  private map!: string;

  public componentDidMount() {
    this.init();
  }

  public render() {
    if (!Store.confirmedOrder) {
      return (
        <CenteredWrapper>
          <Text fontSize={20} fontWeight={700}>
            Нет активного заказа!
          </Text>
        </CenteredWrapper>
      );
    }

    if (!this.isInitialized) {
      return (
        <CenteredWrapper>
          <Loader color={Colors.LIGHT_GREY} />
        </CenteredWrapper>
      );
    }

    return (
      <Wrapper>
        {this.isInitialized && (
          <WebView
            originWhitelist={['*']}
            source={{ html: this.map }}
            style={{ width: '100%', height: '100%' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        )}
      </Wrapper>
    );
  }

  private async init() {
    if (!Store.confirmedOrder) {
      return;
    }

    await this.getCoordinates();
    this.map = map
      .replace('API_KEY', Store.getApiKey())
      .replace('LATITUDE', this.coordinates.latitude.toString())
      .replace('LONGITUDE', this.coordinates.latitude.toString());

    this.isInitialized = true;
  }

  private async getCoordinates() {
    try {
      this.coordinates = await Store.getCoordinates(
        Store.confirmedOrder!.addressDescription!.title,
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default Track;