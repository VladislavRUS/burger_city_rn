import { observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import DatePicker from 'react-native-datepicker';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import ArrowHeaderLeft from '../../components/ArrowHeaderLeft/ArrowHeaderLeft';
import { Button } from '../../components/Button';
import { Detail } from '../../components/Detail';
import { CalendarIcon } from '../../components/Icons/CalendarIcon';
import { WatchIcon } from '../../components/Icons/WatchIcon';
import { Text } from '../../components/Text';
import { Store } from '../../store';
import {
  ButtonWrapper,
  DatePickerWrapper,
  DateWrapper,
  Wrapper,
} from './DateTime.styles';

@observer
class DateTime extends React.Component<
  NavigationScreenProps & InjectedIntlProps
> {
  public static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<any, any>;
  }) => {
    const onPress = () => navigation.goBack();

    return {
      title: 'Burger City',
      headerLeft: <ArrowHeaderLeft onPress={onPress} />,
    };
  };

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

  private datePicker?: DatePicker;
  @observable
  private mode: string = 'date';
  @observable
  private dateTime: any;

  constructor(props: NavigationScreenProps & InjectedIntlProps) {
    super(props);
    this.dateTime = moment(Store.order.dateTime);
  }

  public render() {
    const dateFormat = this.formatMessage({ id: 'dateAndTime.dateFormat' });

    return (
      <Wrapper>
        <DateWrapper>
          <Detail
            title={this.formatMessage({ id: 'dateAndTime.pickupDate' })}
            subtitle={this.formatMessage({ id: 'dateAndTime.selectDate' })}
            panelText={moment(this.dateTime).format(
              this.formatMessage({ id: 'dateAndTime.dateFormat' }),
            )}
            icon={<CalendarIcon />}
            onPress={this.onOpenDatePicker}
          />
        </DateWrapper>

        <Detail
          title={this.formatMessage({ id: 'dateAndTime.pickupTime' })}
          subtitle={this.formatMessage({ id: 'dateAndTime.selectTime' })}
          panelText={moment(this.dateTime).format(
            this.formatMessage({ id: 'dateAndTime.timeFormat' }),
          )}
          icon={<WatchIcon />}
          onPress={this.onOpenTimePicker}
        />

        <DatePickerWrapper>
          <DatePicker
            ref={this.handleDatePickerRef}
            date={this.dateTime}
            mode={this.mode}
            format={dateFormat}
            minDate={moment().format(dateFormat)}
            maxDate={moment()
              .add(2, 'days')
              .format(dateFormat)}
            onDateChange={this.onDateChange}
            showIcon={false}
            hideText={true}
            locale={'ru_RU'}
          />
        </DatePickerWrapper>
        <ButtonWrapper>
          <Button onPress={this.onSelect}>
            <Text fontSize={16} fontWeight={700} color={'#fff'}>
              {this.formatMessage({ id: 'dateAndTime.select' })}
            </Text>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }

  private handleDatePickerRef = (datePicker: DatePicker) => {
    this.datePicker = datePicker;
  };

  private onOpenDatePicker = () => {
    this.mode = 'date';
    requestAnimationFrame(this.openDatePicker);
  };

  private onOpenTimePicker = () => {
    this.mode = 'time';
    requestAnimationFrame(this.openDatePicker);
  };

  private openDatePicker = () => {
    if (!this.datePicker) {
      return;
    }

    this.datePicker.onPressCancel();
    this.datePicker.onPressDate();
  };

  private onDateChange = (dateStr: string, date: Date) => {
    const dateTime = moment(this.dateTime);
    const newDateTime = moment(date);

    if (this.mode === 'date') {
      newDateTime.hours(dateTime.hours());
      newDateTime.minutes(dateTime.minutes());
    } else {
      newDateTime.year(dateTime.year());
      newDateTime.month(dateTime.month());
      newDateTime.date(dateTime.date());
    }

    this.dateTime = newDateTime;
  };

  private onSelect = () => {
    Store.setOrderDateTime(new Date(this.dateTime.valueOf()));
    const { navigation } = this.props;
    navigation.goBack();
  };
}

export default injectIntl(DateTime);
