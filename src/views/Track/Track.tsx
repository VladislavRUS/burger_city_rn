import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { WebView } from 'react-native-webview';
import { NavigationScreenProp } from 'react-navigation';
import { CartHeaderRight } from '../../components/CartHeaderRight';
import { LanguageMenu } from '../../components/LanguageMenu';
import { Loader } from '../../components/Loader';
import { Text } from '../../components/Text';
import { Colors } from '../../constants/Colors';
import { Routes } from '../../constants/Routes';
import Coordinates from '../../models/Coordinates';
import Store from '../../store/Store';
import { map } from './map';
import { CenteredWrapper, FakeMapImage, Wrapper } from './Track.styles';

@observer
class Track extends React.Component<InjectedIntlProps> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.navigate(Routes.CART);

    return {
      title: 'Burger City',
      headerRight: <CartHeaderRight onPress={onPress} />,
      headerLeft: <LanguageMenu />,
    };
  };

  @observable
  private isInitialized = false;
  @observable
  private isLoading = false;
  @observable
  private useFakeMap = false;
  private coordinates!: Coordinates;
  private map!: string;

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

  public componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('didFocus', this.init);
    navigation.addListener('didBlur', this.onBlur);
  }

  public componentWillUnmount() {
    const { navigation } = this.props;
    navigation.removeListener('didFocus', this.init);
    navigation.removeListener('didBlur', this.onBlur);
  }

  public render() {
    if (!Store.confirmedOrder) {
      return (
        <CenteredWrapper>
          <Text fontSize={20} fontWeight={700}>
            {this.formatMessage({ id: 'trackOrders.empty' })}
          </Text>
        </CenteredWrapper>
      );
    }

    if (this.isLoading) {
      return (
        <CenteredWrapper>
          <Loader color={Colors.LIGHT_GREY} />
        </CenteredWrapper>
      );
    }

    if (this.useFakeMap) {
      return <FakeMapImage />;
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

  private onBlur = () => {
    this.isInitialized = false;
    this.useFakeMap = false;
    this.isLoading = false;
  };

  private init = async () => {
    if (!Store.confirmedOrder) {
      return;
    }

    await this.getCoordinates();
    this.map = map
      .replace('API_KEY', Store.getApiKey())
      .replace('LATITUDE', this.coordinates.latitude.toString())
      .replace('LONGITUDE', this.coordinates.latitude.toString());
  };

  private async getCoordinates() {
    this.isLoading = true;

    try {
      this.coordinates = await Store.getCoordinates(
        Store.confirmedOrder!.addressDescription!.title,
      );
      this.isInitialized = true;
    } catch (e) {
      this.useFakeMap = true;
    } finally {
      this.isLoading = false;
    }
  }
}

export default injectIntl(Track);
