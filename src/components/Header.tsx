import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { backIcon } from '../../res';

type Props = {
  style?: StyleProp<ViewStyle>,
};

export const Header: React.FC<Props> = ({ style }) => {
  const navigation = useNavigation();

  const onClickGoBack = () => navigation.goBack();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onClickGoBack}
        style={styles.backButton}>
        <Image
          source={backIcon}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 24,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  backButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 8,
    height: 14,
  }
});
