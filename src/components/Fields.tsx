import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Animated, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { emailIcon, lockIcon } from '../../res';
import { Routes } from '../navigation/routes.types';
import { textStyles } from '../textStyles';
import { isValidEmail } from '../utils/validation';
import { UiButton } from './UiButton';
import { UiInput } from './UiInput';

type FieldsType = 'login' | 'registration';

export interface AuthParams {
  email: string
  password: string
}

type Props = {
  style?: StyleProp<ViewStyle>,
  type?: FieldsType,
  onClickAuth?: (value: AuthParams) => Promise<boolean | undefined>,
};

export const Fields: React.FC<Props> = ({
  style,
  type = 'login',
  onClickAuth,
}) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const navigation = useNavigation();
  const isLogin = type === 'login';

  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0deg', '2deg', '-2deg'],
  });
  const splash = () => {
    Animated
      .loop(
        Animated.sequence([
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 30,
            useNativeDriver: true,
          }),
          Animated.timing(spinValue, {
            toValue: 2,
            duration: 60,
            useNativeDriver: true,
          }),
          Animated.timing(spinValue, {
            toValue: 0,
            duration: 90,
            useNativeDriver: true,
          }),
        ]), { iterations: 1 })
      .start();
  }

  const onPress = () => {
    const isEmailValid = isValidEmail(email)
    const isPasswordValid = password && password.length > 0;

    if (!isEmailValid || !isPasswordValid) {
      console.log('Email or password is not valid');
      splash();
      return;
    }

    onClickAuth?.({ email: email ?? '', password }).then(isAuthorized => {
      if (!isAuthorized) {
        splash();
        return;
      }

      // authorization was successful
      navigation.navigate(Routes.HomeScreen as never)
    })
  };

  const onChangeEmail = (value?: string) => {
    setEmail(value);
  };

  const onChangePassword = (value?: string) => {
    setPassword(value);
  }

  return (
    <View style={[styles.container, style]}>
      {/* email */}
      <UiInput
        type='email'
        autoCapitalize='none'
        textContentType='emailAddress'
        leftImage={emailIcon}
        placeholder='Email'
        value={email}
        onChangeTextValue={onChangeEmail}
      />
      {/* password */}
      <UiInput
        type='password'
        autoCapitalize='none'
        style={styles.passwordContainer}
        leftImage={lockIcon}
        placeholder='Password'
        value={password}
        onChangeTextValue={onChangePassword}
        showEye
      />

      {/* forgot button */}
      {
        isLogin &&
        <Text style={[textStyles.link, styles.forgotPassword]}>Forgot password</Text>
      }

      {/* animated action button */}
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      >
        <UiButton
          style={styles.loginButton}
          title={isLogin ? 'Login' : 'Sing up'}
          onPress={onPress}
        />
      </Animated.View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  passwordContainer: {
    marginTop: 16,
  },
  textInput: {
    flex: 1,
  },
  forgotPassword: {
    ...textStyles.link,
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  loginButton: {
    marginTop: 16,
  },
});
