import React from 'react';
import { Colors } from '../../constants/Colors';
import InfoPanel from '../InfoPanel/InfoPanel';
import { Text } from '../Text';
import { Option, Wrapper } from './SelectButton.styles';

interface ISelectButtonOption {
  text: string;
}

interface ISelectButtonProps {
  options: ISelectButtonOption[];
  selectedOptionIndex: number;
  onOptionPress: (index: number) => void;
}

class SelectButton extends React.PureComponent<ISelectButtonProps> {
  public render() {
    const { options, selectedOptionIndex, onOptionPress } = this.props;

    return (
      <InfoPanel>
        {options.map((option, index: number) => {
          const onPress = () => onOptionPress(index);
          const isActive = selectedOptionIndex === index;

          return (
            <Option key={index} isActive={isActive} onPress={onPress}>
              <Text
                fontSize={16}
                fontWeight={700}
                color={isActive ? '#fff' : Colors.MAIN_DARK_COLOR}
              >
                {option.text}
              </Text>
            </Option>
          );
        })}
      </InfoPanel>
    );
  }
}

export default SelectButton;
