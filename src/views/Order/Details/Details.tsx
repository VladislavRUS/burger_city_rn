import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Text } from '../../../components/Text';
import { Colors } from '../../../constants/Colors';
import { TextWrapper, Wrapper } from './Details.styles';

interface IDetailsProps {
  dateTime?: string;
  address: string;
}

const Details: React.FC<IDetailsProps & InjectedIntlProps> = ({
  dateTime,
  address,
  intl,
}) => (
  <Wrapper>
    <TextWrapper>
      <Text fontSize={16} fontWeight={700} color={'#fff'}>
        {intl.formatMessage({ id: 'order.deliveringBy' })}
      </Text>
    </TextWrapper>
    {dateTime && (
      <TextWrapper>
        <Text fontSize={15} fontWeight={600} color={Colors.MAIN_COLOR}>
          {dateTime}
        </Text>
      </TextWrapper>
    )}
    <Text fontSize={15} fontWeight={600} color={'#fff'}>
      {address}
    </Text>
  </Wrapper>
);

export default injectIntl(Details);
