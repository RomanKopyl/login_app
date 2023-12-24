import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Image, ImageSourcePropType, StyleProp, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { EmailImage, eyeIcon, LockImage } from '../../res';
import { FieldText, InputHeaderText } from '../styles/components';

export type TypeInput = 'email' | 'password';

interface Props extends TextInputProps {
  type: TypeInput,
  style?: StyleProp<ViewStyle>,
  onChangeTextValue?: (value?: string) => void,
  leftImage?: ImageSourcePropType,
  rightImage?: ImageSourcePropType,
  onClickRightImage?: () => void,
  showEye?: boolean,
};

export const UiInput: React.FC<Props> = ({
  type,
  style,
  onChangeTextValue,
  leftImage,
  rightImage,
  onClickRightImage,
  showEye = false,
  ...props
}) => {
  const [isFocus, setFocus] = useState<boolean>();
  const [showValue, setShowValue] = useState(type === 'password');

  const inputRef = useRef<TextInput | null>(null);

  const currentColorStyle = isFocus ? '#EB0057' : '#818181';
  const formattedStyle = useMemo(() => [
    styles.inputContainer,
    isFocus ? styles.activeBorder : styles.passiveBorder,
    style,
  ], [isFocus])


  const onPressContainer = useCallback(() => {
    inputRef.current?.focus();
    setFocus(true);
  }, []);

  const toggleShowingPassword = () => setShowValue(!showValue);

  const onChangeValue = (e: string) => {
    onChangeTextValue?.(e);

  };
  const onFocus = () => {
    setFocus(true);
  }
  const onBlur = () => {
    setFocus(false);
  }

  return (
    <TouchableOpacity
      style={formattedStyle}
      onPress={onPressContainer}
    >
      {/* left image */}
      <View style={styles.leftImageContainer}>
        {
          type === 'email'
            ? <EmailImage fill={currentColorStyle} />
            : <LockImage fill={currentColorStyle} />
        }
      </View>
      {/* main content */}
      <View style={styles.mainContent}>
        {
          (isFocus || (props?.value && props?.value?.length > 0))
            ?
            <View style={styles.activeContainer}>
              <InputHeaderText>{props?.placeholder}</InputHeaderText>
              <TextInput
                {...props}
                ref={inputRef}
                autoFocus={true}
                autoCorrect={false}
                secureTextEntry={showValue}
                value={props?.value}
                placeholderTextColor='#818181'
                style={[styles.textInput]}
                focusable={isFocus}
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChangeValue}
              />
            </View>
            :
            <FieldText>
              {props?.placeholder}
            </FieldText>
        }
      </View>
      {/* right image */}
      {
        showEye ?
          <TouchableOpacity
            onPress={toggleShowingPassword}
            style={styles.image}
          >
            <Image source={rightImage ?? eyeIcon} />
          </TouchableOpacity>
          : null
      }

    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    height: 116,
    width: '100%',
    flexDirection: 'column',
  },
  activeContainer: {
    height: '100%',
  },
  inputContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 13,
    borderRadius: 10,
    borderWidth: 1,
  },
  activeBorder: {
    borderColor: '#EB0057',
  },
  passiveBorder: {
    borderColor: '#262727',
  },
  mainContent: {
    flex: 1,
  },
  passwordContainer: {
    marginTop: 16,
  },
  textInput: {
    flex: 1,
    color: 'white'
  },
  leftImageContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  image: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
