import React from 'react';
import { Text } from '../../../components/Text';
import { Colors } from '../../../constants/Colors';
import { TextWrapper, Wrapper } from './Details.styles';

interface IDetailsProps {
  dateTime?: string;
  address: string;
}

const Details: React.FC<IDetailsProps> = ({ dateTime, address }) => (
  <Wrapper>
    <TextWrapper>
      <Text fontSize={16} fontWeight={700} color={'#fff'}>
        Будет доставлено
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

export default Details;
