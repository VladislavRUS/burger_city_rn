import React from 'react';
import { FastImageSource } from 'react-native-fast-image';
import Menu, { MenuItem } from 'react-native-material-menu';
import { Colors } from '../../constants/Colors';
import AvailableLocale from '../../models/AvailableLocale';
import Store from '../../store/Store';
import DropdownIcon from '../Icons/DropdownIcon/DropdownIcon';
import { Text } from '../Text';
import { IconWrapper, Image, Wrapper } from './LanguageMenu.styles';

class LanguageMenu extends React.Component {
  private menuRef: any;

  public render() {
    return (
      <Wrapper onPress={this.showMenu}>
        <Text fontSize={18} fontWeight={700} color={Colors.MAIN_COLOR}>
          {Store.currentLocale.languageCode.toUpperCase()}
        </Text>
        <IconWrapper>
          <DropdownIcon />
        </IconWrapper>
        <Menu ref={this.handleMenuRef}>
          {Store.availableLocales.map(locale => {
            const onPress = () => this.onLocalePress(locale);

            return (
              <MenuItem onPress={onPress} key={locale.languageCode}>
                <Text>{locale.languageCode.toUpperCase() + ' '}</Text>
                <Image source={locale.icon as FastImageSource} />
              </MenuItem>
            );
          })}
        </Menu>
      </Wrapper>
    );
  }

  private showMenu = () => {
    this.menuRef.show();
  };

  private handleMenuRef = (menuRef: any) => {
    this.menuRef = menuRef;
  };

  private onLocalePress(locale: AvailableLocale) {
    Store.setLocale(locale);
    this.menuRef.hide();
  }
}

export default LanguageMenu;
