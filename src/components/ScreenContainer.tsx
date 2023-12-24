import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backGroundImage } from '../../res';
import { Header } from './Header';

type Props = {
  style?: StyleProp<ViewStyle>,
  children: JSX.Element[] | JSX.Element,
  withHeader?: boolean,
};

export const ScreenContainer: React.FC<Props> = ({ children, style, withHeader = false }) => {

  return (
    <ImageBackground source={backGroundImage} style={{ flex: 1 }}>
      <SafeAreaView style={[styles.screenContainer, style]}>
        {withHeader && <Header />}

        <View style={styles.contentContainer}>
          {/* may use the UiGradient for creating gradients */}
          {/* <View style={{ position: 'absolute', right: -200, top: -150 }}>
            <UiGradient />
          </View>
          <View style={{ position: 'absolute', left: -100, top: 150 }}>
            <UiGradient color='#EB0057' />
          </View> */}

          {children}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  contentContainer: {
    paddingHorizontal: 35,
    height: '100%',
    position: 'relative',
  },
});
