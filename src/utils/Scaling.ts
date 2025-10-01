import { Dimensions, Platform } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
 
 
export const winWidth: number = Dimensions.get('window').width
export const winHeight: number = Dimensions.get('window').height
export const width: number = Dimensions.get('screen').width * 0.01
export const height: number = Dimensions.get('screen').height * 0.01
export const NoticeHeight = Platform.OS === 'ios' ? height * 0.12 : height * 0.07
 
 
// Layout scaling helpers
export const hs = (size: number) => scale(size);          // horizontal scale
export const vs = (size: number) => verticalScale(size);  // vertical scale
export const ms = (size: number, factor: number = 0.5) =>
  moderateScale(size, factor); // moderate scaling
 
// Font scaling helpers
export const fs = (size: number) => RFValue(size);        // font scale
export const fp = (percent: number) => RFPercentage(percent); // font by % screen height
 
 
export const FONT_SIZES = {
  h1: fs(24),
  h2: fs(20),
  body: fs(14),
  caption: fs(12),
};
 
export const SPACING = {
  xs: ms(4),
  sm: ms(8),
  md: ms(16),
  lg: ms(24),
};