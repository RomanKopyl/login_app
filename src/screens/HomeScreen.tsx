import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { logoBg } from '../../res';
import { ScreenContainer } from '../components/ScreenContainer';
import { UiButton } from '../components/UiButton';
import { Routes } from '../navigation/routes.types';
import { BodyText, HeaderText, SubTitleText } from '../styles/components';
import { getUserFromApi } from '../utils/api';
import { cleanSession } from '../utils/auth';

export interface User {
  id: string,
  name: string,
  username: string,
  email: string,
}

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    getUserFromApi()
      .then(result => setUser(result))
      .catch(error => console.error(error));
  }, [])


  const onClickLogout = () => {
    cleanSession()
      .then(() => navigation.navigate(Routes.SplashScreen as never))
      .catch(error => console.error(error));
  }

  return (
    <ScreenContainer>
      <Image
        source={logoBg}
        resizeMode="cover"
        style={styles.image}
      />

      <BodyText style={styles.body}>You’re logged in now </BodyText>
      <HeaderText style={styles.name}>{user?.name ?? ''}</HeaderText>
      <SubTitleText style={styles.content}>Now you can see the app content!</SubTitleText>

      {/* Action buttons */}
      <UiButton
        style={styles.buttonStyle}
        onPress={onClickLogout}
        title='Log out'
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    top: 54,
    left: 0,
    height: 388,
  },
  screenContainer: {
    flex: 1,
  },
  body: {
    marginTop: 336,
    textAlign: 'center',
    color: '#818181',
  },
  name: {
    textAlign: 'center',
    marginTop: 8,
  },
  content: {
    textAlign: 'center',
    marginTop: 54,
  },
  buttonStyle: {
    marginTop: 99,
  },
});

