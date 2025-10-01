import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import { Colors, Fonts } from '../../utils/Constants';
import CustomText from './CustomText';
import { hs, vs, ms, fs } from '../../utils/Scaling'; // ✅ use scaling helpers
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icons from './Icons';


interface HeaderProps {
  title?: string;  
  backIcon?: boolean;
  onPress?: () => void;
  onPressVisible?: () => void;
  marginB?: number;
  marginT?: number;
  gap?: number;
  borderBottomWidth?: number,
  borderBottomColor?: string,
  backgroundColor?: string,

}

const CustomHeader: FC<HeaderProps & React.ComponentProps<typeof TextInput>> = ({
  
  title,
  backIcon, 
  onPress,
  marginB = 0,
  marginT = 0,
  gap = 0,
  borderBottomWidth = 0,
  borderBottomColor = '',
  backgroundColor= '',
  
  onPressVisible,
  ...props
}) => {
  return (
    <View style={[styles.container, {marginTop: vs(marginT), marginBottom: vs(marginB),  }]}>
      <View style={[styles.headerContainer, {gap: gap ?? 0, borderBottomWidth:borderBottomWidth ?? 0, borderBottomColor: borderBottomColor ?? '',backgroundColor: backgroundColor ?? '',}]}>
        
      {backIcon &&(
        <TouchableOpacity style={styles.arrowContainer}
         onPress={onPress}
        >
          {/* <Image style={styles.arrow}
          source={require('../../assets/icons/arrow-left.png')}/> */}
          <Icons
           name='arrow-back' size={30} iconFamily='Ionicons' color='#fff'
          />
        </TouchableOpacity>
      )}
      {title && (
        <Text style ={styles.title}> {title}</Text>
      )}
      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    height: vs(52)
  },
  arrowContainer:{
    width: hs(30),
    height: vs(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow:{
    width: hs(20),
    height: vs(14)
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Roboto Regular',
    fontSize: fs(17)
  },
});

export default CustomHeader;
