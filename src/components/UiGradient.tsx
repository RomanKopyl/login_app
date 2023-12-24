import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

type Props = {
  style?: StyleProp<ViewStyle>,
  color?: string,
};

export const UiGradient: React.FC<Props> = ({ style, color = 'white' }) => {
  const radius = 150;
  const height = 400;

  return (
    <Svg height={height} width={height}>
      <Defs>
        <RadialGradient
          id="grad"
          cx={radius}
          cy={radius}
          rx={radius}
          ry={radius}
          fx={radius}
          fy={radius}
          gradientUnits="userSpaceOnUse">
          <Stop offset="1" stopColor={color} stopOpacity="0" />
          <Stop offset="0.4" stopColor={color} stopOpacity="0.1" />
        </RadialGradient>
      </Defs>
      <Circle cx={'200'} cy={'200'} r={'200'} fill="url(#grad)" />
    </Svg>
  );
};

const styles = StyleSheet.create({
});
