import React, { FC } from 'react';

import { AntDesign, AntDesignIconName } from '@react-native-vector-icons/ant-design';
import { Feather, FeatherIconName } from '@react-native-vector-icons/feather';
import { FontAwesome, FontAwesomeIconName } from '@react-native-vector-icons/fontawesome';
import { Ionicons, IoniconsIconName } from '@react-native-vector-icons/ionicons';
import { Lucide, LucideIconName } from '@react-native-vector-icons/lucide';
import {MaterialDesignIcons , MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
import { MaterialIcons, MaterialIconsIconName } from '@react-native-vector-icons/material-icons';
import { Octicons, OcticonsIconName } from '@react-native-vector-icons/octicons';
import { TextStyle } from 'react-native';

type IconProps =
  | { iconFamily: 'AntDesign'; name: AntDesignIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'Feather'; name: FeatherIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'FontAwesome'; name: FontAwesomeIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'Ionicons'; name: IoniconsIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'Lucide'; name: LucideIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'MaterialDesignIcons'; name: MaterialDesignIconsIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'MaterialIcons'; name: MaterialIconsIconName; size: number; color?: string, style?: TextStyle }
  | { iconFamily: 'Octicons'; name: OcticonsIconName; size: number; color?: string, style?: TextStyle };

const Icons: FC<IconProps> = ({ iconFamily, name, size, color='#000000', style }) => {
  switch (iconFamily) {
    case 'AntDesign':
      return <AntDesign name={name} size={size} color={color} style={style}/>;
    case 'Feather':
      return <Feather name={name} size={size} color={color} style={style} />;
    case 'FontAwesome':
      return <FontAwesome name={name} size={size} color={color} style={style} />;
    case 'Ionicons':
      return <Ionicons name={name} size={size} color={color} style={style} />;
    case 'Lucide':
      return <Lucide name={name} size={size} color={color} style={style} />;
    case 'MaterialDesignIcons':
      return <MaterialDesignIcons name={name} size={size} color={color} style={style} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} style={style} />;
    case 'Octicons':
      return <Octicons name={name} size={size} color={color} style={style} />;
    default:
      return null;
  }
};

export default Icons;
