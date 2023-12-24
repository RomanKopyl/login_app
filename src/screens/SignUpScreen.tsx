import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { userIcon } from '../../res';
import { AuthParams, Fields } from '../components/Fields';
import { ScreenContainer } from '../components/ScreenContainer';
import { Routes } from '../navigation/routes.types';
import { BodyText, HeaderText } from '../styles/components';
import { textStyles } from '../textStyles';
import { updateSession } from '../utils/auth';

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();

  const onClickSignUp = async (value: AuthParams) => {
    // sign up
    try {
      // check email include it in storage already
      const jsonValue = await AsyncStorage.getItem(value.email);
      const userInfo = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (jsonValue && value.email === userInfo.email) {
        return false;
      }

      const jsonNewValue = JSON.stringify(value);
      await AsyncStorage.setItem(value.email, jsonNewValue);
      await updateSession(value.email);

      return true;
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  return (
    <ScreenContainer withHeader>
      <Image
        source={userIcon}
        style={styles.userIcon}
      />

      <HeaderText style={styles.header}>Sing up</HeaderText>
      <BodyText style={styles.body}>Create your email and  password for your account</BodyText>

      <Fields
        style={styles.fields}
        type={'registration'}
        onClickAuth={onClickSignUp}
      />

      <View style={styles.bottomContainer}>
        <BodyText>Already have an account?  </BodyText>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.LoginScreen as never)}
          style={styles.buttonTextStyle}
        >
          <Text style={textStyles.link}> Log in</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 60,
    height: 60,
    marginTop: 126,
    marginRight: 40,
    alignSelf: 'flex-end',
  },
  header: {
    marginTop: 72,
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
    fontSize: 20,
    fontWeight: '500',
    height: '100%',
    paddingVertical: 4,
    marginLeft: 8,
  },
});
