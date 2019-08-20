import React from 'react';
import { Modal } from 'react-native';
import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import {
  ButtonWrapper,
  Circle,
  CircleWrapper,
  InfoWrapper,
  Overlay,
  PrizeImage,
  TitleWrapper,
  Wrapper,
} from './SurpriseModal.styles';

interface ISurpriseModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
}

const SurpriseModal: React.FC<ISurpriseModalProps> = ({
  isOpened,
  onRequestClose,
}) => (
  <Modal
    visible={isOpened}
    transparent={true}
    animationType={'fade'}
    onRequestClose={onRequestClose}
  >
    <Overlay>
      <Wrapper>
        <CircleWrapper>
          <Circle />
        </CircleWrapper>
        <PrizeImage />
        <TitleWrapper>
          <Text fontSize={15} fontWeight={700}>
            Поздравляем!
          </Text>
        </TitleWrapper>
        <InfoWrapper>
          <Text isCentered={true} fontSize={15} fontWeight={600}>
            Спасибо за оплату! Вы выиграли бесплатную кока-колу!
          </Text>
        </InfoWrapper>
        <ButtonWrapper>
          <Button onPress={onRequestClose}>
            <Text fontSize={16} fontWeight={700} color={'#fff'}>
              OK
            </Text>
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Overlay>
  </Modal>
);

export default SurpriseModal;
