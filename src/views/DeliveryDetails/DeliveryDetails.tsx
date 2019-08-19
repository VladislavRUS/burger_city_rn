import React from 'react';

import { computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import Button from '../../components/Button/Button';
import { Detail } from '../../components/Detail';
import PencilIcon from '../../components/Icons/PencilIcon/PencilIcon';
import SelectButton from '../../components/SelectButton/SelectButton';
import { Text } from '../../components/Text';
import { Routes } from '../../constants/Routes';
import { Store } from '../../store';
import {
  AddressDetailWrapper,
  ButtonWrapper,
  SelectButtonWrapper,
  TitleWrapper,
  Wrapper,
} from './DeliveryDetails.styles';

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

  @computed
  get isButtonDisabled() {
    return !Store.order.dateTime || !Store.order.addressDescription;
  }

  public render() {
    const addressPanelText = Store.order.addressDescription
      ? Store.order.addressDescription.title
      : 'Адрес доставки';

    const timePanelText = Store.order.dateTime
      ? moment(Store.order.dateTime).format('DD-MM-YYYY HH:mm')
      : 'Дата и Время доставки';

    return (
      <Wrapper>
        {this.renderTitle()}
        {this.renderSelectButton()}
        <AddressDetailWrapper>
          <Detail
            title={'Адрес доставки'}
            panelText={addressPanelText}
            onPress={this.onAddressPress}
            icon={<PencilIcon />}
          />
        </AddressDetailWrapper>
        {this.selectedOptionIndex === Options.IN_ADVANCE && (
          <Detail
            title={'Дата и Время доставки'}
            subtitle={'Пожалуйста, выберите дату и время'}
            panelText={timePanelText}
            onPress={this.onDateTimePress}
            icon={<PencilIcon />}
          />
        )}

        <ButtonWrapper>
          <Button
            onPress={this.onSelectPress}
            isDisabled={this.isButtonDisabled}
          >
            <Text fontSize={16} fontWeight={700} color={'#fff'}>
              Выбрать
            </Text>
          </Button>
        </ButtonWrapper>
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

    if (this.selectedOptionIndex === Options.IN_ADVANCE) {
      const momentDate = moment().add(1, 'hour');
      Store.setOrderDateTime(new Date(momentDate.valueOf()));
    }
  };

  private onAddressPress = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.ADDRESS);
  };

  private onDateTimePress = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.DATE_TIME);
  };

  private onSelectPress = () => {
    console.log('onSelectPress');
  };
}

export default DeliveryDetails;
