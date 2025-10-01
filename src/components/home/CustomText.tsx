/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, TextStyle, TextProps } from 'react-native';
import { Fonts } from '../../utils/Constants';
import { fs, fp } from '../../utils/Scaling';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  fontFamily?: keyof typeof Fonts;
  fontSize?: number; // will be scaled via fs()
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  usePercentage?: boolean; // optional flag to allow fp()
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  fontFamily = 'Regular',
  fontSize = 12,
  color = '#363636',
  fontWeight = 'normal',
  usePercentage = false,
  ...props
}) => {
  const textStyle: TextStyle = {
    fontFamily: Fonts[fontFamily],
    fontSize: usePercentage ? fp(fontSize) : fs(fontSize), // ✅ scale font size
    color,
    fontWeight,
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  };

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
