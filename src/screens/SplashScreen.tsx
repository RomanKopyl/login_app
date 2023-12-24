import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { logoIcon } from '../../res';
import { ScreenContainer } from '../components/ScreenContainer';
import { UiButton } from '../components/UiButton';
import { Routes } from '../navigation/routes.types';


export const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  const onClickLogin = () => navigation.navigate(Routes.LoginScreen as never);
  const onClickSignUp = () => navigation.navigate(Routes.SignUpScreen as never);

  return (
    <ScreenContainer>
      <Image
        source={logoIcon}
        style={styles.logo}
      />

      {/* Action buttons */}
      <View style={styles.buttonsView}>
        <UiButton
          title='Login'
          onPress={onClickLogin}
        />
        <UiButton
          type='second'
          title='Register'
          onPress={onClickSignUp}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 104,
    height: 111,
    marginTop: 214,
    alignSelf: 'center',
  },
  buttonsView: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    gap: 15,
    marginBottom: 70,
  },
});
