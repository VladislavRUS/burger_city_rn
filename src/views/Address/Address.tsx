import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { NavigationScreenProp, NavigationScreenProps } from 'react-navigation';
import { debounce } from 'ts-debounce';
import { ArrowHeaderLeft } from '../../components/ArrowHeaderLeft';
import { SearchIcon } from '../../components/Icons/SearchIcon';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import AddressDescription from '../../models/AddressDescription';
import { Store } from '../../store';
import { DescriptionWrapper, Wrapper } from './Address.styles';

@observer
class Address extends React.Component<NavigationScreenProps> {
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

  @observable
  private searchStr = '';
  @observable
  private descriptions: AddressDescription[] = [];

  private search = debounce(async (searchStr: string) => {
    try {
      this.descriptions = await Store.findPlace(searchStr);
    } catch (e) {
      console.log(e);
    }
  }, 300);

  public render() {
    return (
      <Wrapper>
        <Input
          value={this.searchStr}
          onChangeText={this.onChangeText}
          placeholder={'Search'}
          icon={<SearchIcon />}
          autoFocus={true}
        />
        {this.descriptions.map(description => {
          const onPress = () => {
            this.onAddressDescriptionPress(description);
          };
          return (
            <DescriptionWrapper
              key={description.id}
              disabled={!description.isValid}
              isValid={description.isValid}
              onPress={onPress}
            >
              <Text fontSize={16} fontWeight={600}>
                {description.title}
              </Text>
            </DescriptionWrapper>
          );
        })}
      </Wrapper>
    );
  }

  private onChangeText = (text: string) => {
    this.searchStr = text;
    this.search(this.searchStr);
  };

  private onAddressDescriptionPress(description: AddressDescription) {
    Store.setAddress(description);
    const { navigation } = this.props;
    navigation.goBack();
  }
}

export default Address;
