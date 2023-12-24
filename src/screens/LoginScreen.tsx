import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { userIcon } from '../../res';
import { AuthParams, Fields } from '../components/Fields';
import { ScreenContainer } from '../components/ScreenContainer';
import { Routes } from '../navigation/routes.types';
import { BodyText, HeaderText } from '../styles/components';
import { textStyles } from '../textStyles';
import { login, updateSession } from '../utils/auth';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const onClickLogin = async (value: AuthParams) => {
    // login
    try {
      const userInfo = await login(value);
      await updateSession(value.email);

      return value.password === userInfo.password;
    } catch (e) {
      console.log(e);
    }
  }

  const onClickSignUp = () => navigation.navigate(Routes.SignUpScreen as never);

  return (
    <ScreenContainer withHeader>
      <Image
        source={userIcon}
        style={styles.userIcon}
      />

      <HeaderText style={styles.header}>Login</HeaderText>

      <BodyText style={styles.body}>Enter your login password from your account</BodyText>

      <Fields
        style={styles.fields}
        onClickAuth={onClickLogin}
      />

      <View style={styles.bottomContainer}>
        <BodyText>Don't have an account?</BodyText>
        <TouchableOpacity
          onPress={onClickSignUp}
          style={styles.buttonTextStyle}
        >
          <Text style={textStyles.link}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 80,
    height: 80,
    marginTop: 126,
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  header: {
    marginTop: 62,
    alignSelf: 'center',
  },
  body: {
    marginTop: 8,
    alignSelf: 'center',
    color: '#818181',
  },
  fields: {
    marginTop: 24,
  },
  bottomContainer: {
    marginTop: 96,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    height: '100%',
    paddingVertical: 4,
    marginLeft: 8,
  },
});
