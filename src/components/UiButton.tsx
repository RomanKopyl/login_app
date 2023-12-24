import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet, ViewStyle
} from 'react-native';
import { ButtonText, STouchableOpacity } from '../styles/components';

type ButtonType = 'main' | 'second';

interface ButtonProps {
  style?: ViewStyle
  type?: ButtonType
  onPress?: (event: GestureResponderEvent) => void
  title: string
}

export const UiButton: React.FC<ButtonProps> = (props) => {
  const {
    style,
    type: buttonType = 'main',
    title,
    onPress,
  } = props;

  STouchableOpacity.defaultProps = {
    theme: {
      main: "#EB0057"
    }
  }

  const theme = {
    main: "#262727"
  };

  const currentTheme = buttonType === 'main' ? undefined : theme;

  return (
    <STouchableOpacity
      theme={currentTheme}
      onPress={onPress}
      style={[styles.buttonStyle, style]}
    >
      <ButtonText style={styles.textButton}>{title}</ButtonText>
    </STouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8,
  },
  textButton: {
    textAlign: 'center',
  },
});
