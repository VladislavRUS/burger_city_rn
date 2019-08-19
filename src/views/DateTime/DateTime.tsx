import { observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
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
class DateTime extends React.Component<NavigationScreenProps> {
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

  private datePicker?: DatePicker;
  private dateFormat = 'DD-MM-YYYY';
  private timeFormat = 'HH:mm';
  @observable
  private mode: string = 'date';
  @observable
  private dateTime: any;

  constructor(props: NavigationScreenProps) {
    super(props);
    this.dateTime = moment(Store.order.dateTime);
  }

  public render() {
    return (
      <Wrapper>
        <DateWrapper>
          <Detail
            title={'Дата'}
            subtitle={'Пожалуйста, укажите дату'}
            panelText={moment(this.dateTime).format(this.dateFormat)}
            icon={<CalendarIcon />}
            onPress={this.onOpenDatePicker}
          />
        </DateWrapper>

        <Detail
          title={'Время'}
          subtitle={'Пожалуйста, укажите время'}
          panelText={moment(this.dateTime).format(this.timeFormat)}
          icon={<WatchIcon />}
          onPress={this.onOpenTimePicker}
        />

        <DatePickerWrapper>
          <DatePicker
            ref={this.handleDatePickerRef}
            date={this.dateTime}
            mode={this.mode}
            format={this.dateFormat}
            minDate={moment().format(this.dateFormat)}
            maxDate={moment()
              .add(2, 'days')
              .format(this.dateFormat)}
            onDateChange={this.onDateChange}
            showIcon={false}
            hideText={true}
            locale={'ru'}
          />
        </DatePickerWrapper>
        <ButtonWrapper>
          <Button onPress={this.onSelect}>
            <Text fontSize={16} fontWeight={700} color={'#fff'}>
              Выбрать
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

export default DateTime;
