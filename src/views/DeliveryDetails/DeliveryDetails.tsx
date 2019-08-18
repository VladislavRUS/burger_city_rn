import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import SelectButton from '../../components/SelectButton/SelectButton';
import { Text } from '../../components/Text';
import { Routes } from '../../constants/Routes';
import { Store } from '../../store';
import {
  AddressDetailWrapper,
  SelectButtonWrapper,
  TitleWrapper,
  Wrapper,
} from './DeliveryDetails.styles';
import Detail from './Detail/Detail';

enum Options {
  NOW = 0,
  IN_ADVANCE = 1,
}

@observer
class DeliveryDetails extends React.Component<NavigationScreenProps> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.goBack();

    return {
      headerLeft: <ArrowHeaderLeft onPress={onPress} />,
    };
  };
  @observable
  private selectedOptionIndex = Options.NOW;
  private options = [
    {
      text: 'Сейчас',
    },
    {
      text: 'Заранее',
    },
  ];

  public render() {
    const addressPanelText = Store.order.addressDescription
      ? Store.order.addressDescription.title
      : 'Адрес доставки';

    return (
      <Wrapper>
        {this.renderTitle()}
        {this.renderSelectButton()}
        <AddressDetailWrapper>
          <Detail
            title={'Адрес доставки'}
            panelText={addressPanelText}
            onPress={this.onAddressPress}
          />
        </AddressDetailWrapper>
        {this.selectedOptionIndex === Options.IN_ADVANCE && (
          <Detail
            title={'Дата и Время доставки'}
            subtitle={'Пожалуйста, выберите дату и время'}
            panelText={'Дата и Время доставки'}
            onPress={this.onAddressPress}
          />
        )}
      </Wrapper>
    );
  }

  private renderTitle() {
    return (
      <TitleWrapper>
        <Text fontSize={15} fontWeight={600}>
          Для продолжения укажите детали заказа
        </Text>
      </TitleWrapper>
    );
  }

  private renderSelectButton() {
    return (
      <SelectButtonWrapper>
        <SelectButton
          options={this.options}
          selectedOptionIndex={this.selectedOptionIndex}
          onOptionPress={this.onOptionPress}
        />
      </SelectButtonWrapper>
    );
  }

  private onOptionPress = (index: number) => {
    this.selectedOptionIndex = index;
  };

  private onAddressPress = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.ADDRESS);
  };
}

export default DeliveryDetails;
