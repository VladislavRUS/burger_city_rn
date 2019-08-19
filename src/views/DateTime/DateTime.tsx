import { observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import React from 'react';
import DatePicker from 'react-native-datepicker';
import { Detail } from '../../components/Detail';
import { CalendarIcon } from '../../components/Icons/CalendarIcon';
import { WatchIcon } from '../../components/Icons/WatchIcon';
import { Store } from '../../store';
import { DatePickerWrapper, DateWrapper, Wrapper } from './DateTime.styles';

@observer
class DateTime extends React.Component {
  private datePicker?: DatePicker;
  private dateFormat = 'DD-MM-YYYY';
  private timeFormat = 'HH:mm';
  @observable
  private mode: string = 'date';

  public render() {
    return (
      <Wrapper>
        <DateWrapper>
          <Detail
            title={'Дата'}
            subtitle={'Пожалуйста, укажите дату'}
            panelText={moment(Store.order.dateTime).format(this.dateFormat)}
            icon={<CalendarIcon />}
            onPress={this.onOpenDatePicker}
          />
        </DateWrapper>

        <Detail
          title={'Время'}
          subtitle={'Пожалуйста, укажите время'}
          panelText={moment(Store.order.dateTime).format(this.timeFormat)}
          icon={<WatchIcon />}
          onPress={this.onOpenTimePicker}
        />

        <DatePickerWrapper>
          <DatePicker
            ref={this.handleDatePickerRef}
            date={Store.order.dateTime}
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
    const dateTimeFromStore = moment(Store.order.dateTime);
    const newDateTime = moment(date);

    if (this.mode === 'date') {
      newDateTime.hours(dateTimeFromStore.hours());
      newDateTime.minutes(dateTimeFromStore.minutes());
    } else {
      newDateTime.year(dateTimeFromStore.year());
      newDateTime.month(dateTimeFromStore.month());
      newDateTime.date(dateTimeFromStore.date());
    }

    Store.setOrderDateTime(new Date(newDateTime.valueOf()));
  };
}

export default DateTime;
