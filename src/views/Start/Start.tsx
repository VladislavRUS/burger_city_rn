import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { NavigationScreenProps } from 'react-navigation';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { RoundedCheckbox } from '../../components/RoundedCheckbox';
import { Text } from '../../components/Text';
import { Colors } from '../../constants/Colors';
import { Durations } from '../../constants/Durations';
import { Routes } from '../../constants/Routes';
import { Store } from '../../store';
import { delay } from '../../utils/delay';
import {
  BigTitleWrapper,
  BottomWrapper,
  CheckboxWrapper,
  FormWrapper,
  InputsWrapper,
  InputWrapper,
  LoginWrapper,
  LogoWrapper,
  StartedWrapper,
  TextButton,
  TextButtonsWrapper,
  TextButtonWrapper,
  TextWrapper,
  TitleWrapper,
  Wrapper,
} from './Start.styles';

@observer
class Start extends React.Component<NavigationScreenProps & InjectedIntlProps> {
  public static navigationOptions = {
    header: null,
  };

  @observable
  private isLoading = false;
  @observable
  private isStarted = false;
  @observable
  private email = '';
  @observable
  private password = '';

  get formatMessage() {
    return this.props.intl.formatMessage;
  }

  public render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        {this.isStarted ? this.renderLogin() : this.renderStarted()}
      </Wrapper>
    );
  }

  private renderStarted() {
    return (
      <StartedWrapper>
        <BigTitleWrapper>
          <Text fontSize={31} fontWeight={700} color={'#fff'}>
            {this.formatMessage({ id: 'start.title' })}
          </Text>
        </BigTitleWrapper>
        <Button onPress={this.onPress} isLoading={this.isLoading}>
          <Text fontSize={16} color={'#fff'} fontWeight={700}>
            {this.formatMessage({ id: 'start.getStarted' })}
          </Text>
        </Button>
      </StartedWrapper>
    );
  }

  private renderLogin() {
    return (
      <LoginWrapper>
        <FormWrapper>
          <TitleWrapper>
            <Text fontSize={22} fontWeight={700} color={'#fff'}>
              {this.formatMessage({ id: 'login.welcomeBack' })}
            </Text>
            <Text fontSize={16} fontWeight={600} color={'#fff'}>
              {this.formatMessage({ id: 'login.loginToContinue' })}
            </Text>
          </TitleWrapper>
          <InputsWrapper>
            <InputWrapper>
              <Input
                value={this.email}
                onChangeText={this.onEmailChange}
                placeholder={this.formatMessage({ id: 'login.email' })}
              />
            </InputWrapper>
            <Input
              value={this.password}
              onChangeText={this.onPasswordChange}
              isSecured={true}
              placeholder={this.formatMessage({ id: 'login.password' })}
            />
          </InputsWrapper>
          <TextButtonsWrapper>
            <TextButton onPress={this.onToggleRemember}>
              <CheckboxWrapper>
                <RoundedCheckbox isActive={Store.isRemember} />
              </CheckboxWrapper>
              <Text
                fontSize={12}
                fontWeight={600}
                color={'rgba(255, 255, 255, 0.6)'}
              >
                {this.formatMessage({ id: 'login.rememberMe' })}
              </Text>
            </TextButton>
            <TextButtonWrapper>
              <TextButton>
                <Text
                  fontSize={12}
                  fontWeight={600}
                  color={'rgba(255, 255, 255, 0.6)'}
                >
                  {this.formatMessage({ id: 'login.forgot' })}
                </Text>
              </TextButton>
            </TextButtonWrapper>
          </TextButtonsWrapper>
          <Button onPress={this.onLogin} isLoading={this.isLoading}>
            <Text fontSize={16} color={'#fff'} fontWeight={700}>
              {this.formatMessage({ id: 'login.logIn' })}
            </Text>
          </Button>
        </FormWrapper>
        <BottomWrapper>
          <TextButton>
            <Text fontSize={12} fontWeight={600} color={Colors.MAIN_COLOR}>
              {this.formatMessage({ id: 'login.newUser' })}
            </Text>
          </TextButton>
          <TextWrapper>
            <Text
              fontSize={10}
              fontWeight={600}
              color={'#fff'}
              isCentered={true}
            >
              {this.formatMessage({ id: 'login.termsOfService' })}
            </Text>
          </TextWrapper>
        </BottomWrapper>
      </LoginWrapper>
    );
  }

  private onPress = async () => {
    this.isLoading = true;
    await delay(Durations.LOADING_DURATION);
    this.isLoading = false;
    this.isStarted = true;
  };

  private onLogin = async () => {
    this.isLoading = true;
    await delay(Durations.LOADING_DURATION);
    this.isLoading = false;

    const { navigation } = this.props;
    navigation.navigate(Routes.MAIN_NAVIGATOR);
  };

  private onEmailChange = (text: string) => {
    this.email = text;
  };

  private onPasswordChange = (text: string) => {
    this.password = text;
  };

  private onToggleRemember = () => {
    Store.toggleRemember();
  };
}

export default injectIntl(Start);
