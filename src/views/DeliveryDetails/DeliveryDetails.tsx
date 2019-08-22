import React from 'react';

import { computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import { InjectedIntlProps, injectIntl } from 'react-intl';
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
class DeliveryDetails extends React.Component<
  NavigationScreenProps & InjectedIntlProps
> {
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
  private optionKeys = [
    'deliveryDetails.orderNow',
    'deliveryDetails.orderInAdvance',
  ];

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

  @computed
  get isButtonDisabled() {
    return !Store.order.dateTime || !Store.order.addressDescription;
  }

  public render() {
    const addressPanelText = Store.order.addressDescription
      ? Store.order.addressDescription.title
      : this.formatMessage({ id: 'deliveryDetails.deliveryAddress' });

    const timePanelText = Store.order.dateTime
      ? moment(Store.order.dateTime).format(
          this.formatMessage({
            id: 'deliveryDetails.deliveryDateAndTimeFormat',
          }),
        )
      : this.formatMessage({ id: 'deliveryDetails.deliveryDateAndTime' });

    return (
      <Wrapper>
        {this.renderTitle()}
        {this.renderSelectButton()}
        <AddressDetailWrapper>
          <Detail
            title={this.formatMessage({
              id: 'deliveryDetails.deliveryAddress',
            })}
            panelText={addressPanelText}
            onPress={this.onAddressPress}
            icon={<PencilIcon />}
          />
        </AddressDetailWrapper>
        {this.selectedOptionIndex === Options.IN_ADVANCE && (
          <Detail
            title={this.formatMessage({
              id: 'deliveryDetails.deliveryDateAndTime',
            })}
            subtitle={this.formatMessage({
              id: 'deliveryDetails.pleaseSelectDateAndTime',
            })}
            panelText={timePanelText}
            onPress={this.onDateTimePress}
            icon={<PencilIcon />}
          />
        )}

        <ButtonWrapper>
          <Button onPress={this.onContinue} isDisabled={this.isButtonDisabled}>
            <Text fontSize={16} fontWeight={700} color={'#fff'}>
              {this.formatMessage({ id: 'deliveryDetails.proceed' })}
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
          {this.formatMessage({ id: 'deliveryDetails.toProceed' })}
        </Text>
      </TitleWrapper>
    );
  }

  private renderSelectButton() {
    const options = this.optionKeys.map(optionKey =>
      this.formatMessage({ id: optionKey }),
    );

    return (
      <SelectButtonWrapper>
        <SelectButton
          options={options}
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

  private onContinue = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.ORDER);
  };
}

export default injectIntl(DeliveryDetails);
