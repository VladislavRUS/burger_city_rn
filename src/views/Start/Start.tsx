import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import TextButton from '../../components/TextButton/TextButton';
import { Durations } from '../../constants/Durations';
import { Store } from '../../store';
import { delay } from '../../utils/delay';
import {
  BigTitleWrapper,
  BottomWrapper,
  FormWrapper,
  InputsWrapper,
  InputWrapper,
  LoginWrapper,
  LogoWrapper,
  StartedWrapper,
  TextButtonsWrapper,
  TextButtonWrapper,
  TitleWrapper,
  Wrapper,
} from './Start.styles';

@observer
class Start extends React.Component {
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
            World's Greatest Burgers.
          </Text>
        </BigTitleWrapper>
        <Button onPress={this.onPress} isLoading={this.isLoading}>
          <Text fontSize={16} color={'#fff'}>
            Get start here
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
              Welcome Back!
            </Text>
            <Text fontSize={16} fontWeight={600} color={'#fff'}>
              Login to continue Burger City
            </Text>
          </TitleWrapper>
          <InputsWrapper>
            <InputWrapper>
              <Input
                value={this.email}
                onChangeText={this.onEmailChange}
                placeholder={'Email Address'}
              />
            </InputWrapper>
            <Input
              value={this.password}
              onChangeText={this.onPasswordChange}
              isSecured={true}
              placeholder={'Password'}
            />
          </InputsWrapper>
          <TextButtonsWrapper>
            <TextButton onPress={this.onToggleRemember}>Remember me</TextButton>
            <TextButtonWrapper>
              <TextButton onPress={this.onToggleRemember}>
                Forgot password?
              </TextButton>
            </TextButtonWrapper>
          </TextButtonsWrapper>
          <Button onPress={this.onPress} isLoading={this.isLoading}>
            <Text fontSize={16} color={'#fff'}>
              Login
            </Text>
          </Button>
        </FormWrapper>
        <BottomWrapper />
      </LoginWrapper>
    );
  }

  private onPress = async () => {
    this.isLoading = true;
    await delay(Durations.LOADING_DURATION);
    this.isLoading = false;
    this.isStarted = true;
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

export default Start;
