import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { Colors, Fonts } from '../../utils/Constants';
import Icons from '../../components/home/Icons';
import CustomText from './CustomText';
import { hs, vs, ms, fs } from '../../utils/Scaling'; // ✅ use scaling helpers

interface InputProps {
  title?: string;
  left: React.ReactNode;
  onClear?: () => void;
  onPressVisible?: () => void;
  right: boolean;
  rightIcon?: React.ReactNode;
  marginB?: number;
  marginT?: number;
  secureIcon?: boolean;
  secure?: boolean;
}

const CustomInput: FC<InputProps & React.ComponentProps<typeof TextInput>> = ({
  left = null,
  onClear,
  right = false,
  rightIcon,
  title,
  marginB = 0,
  marginT = 0,
  secure = true,
  secureIcon,
  onPressVisible,

  ...props
}) => {
  return (
    <View style={[styles.container, { marginTop: vs(marginT), marginBottom: vs(marginB)}]}>
      {title && (
        <CustomText
          fontFamily="Medium"
          fontSize={fs(12)}
          style={{ marginBottom: vs(6) }}
        >
          {title}
        </CustomText>
      )}
      <View style={styles.flexRow}>
        {left && left}
        <TextInput
          {...props}
          style={styles.inputContainer}
          placeholderTextColor={Colors.disabled}
          secureTextEntry={secure}
        />
        {props?.value?.length !== 0 && right && !secureIcon && (
          <View style={styles.icon}>
            <TouchableOpacity onPress={onClear}>
              <Icons
                iconFamily="Ionicons"
                name="close-circle-sharp"
                size={fs(16)}
                color={'#ccc'}
              />
            </TouchableOpacity>
          </View>
        )}
        {secureIcon && !right && (
          <TouchableOpacity style={{ marginRight: hs(10) }} onPress={onPressVisible}>
            <Icons
              iconFamily="Ionicons"
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={fs(20)}
              color={'#ccc'}
            />
          </TouchableOpacity>
        )}
        {rightIcon && (
          rightIcon
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    // alignSelf: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: ms(10),
    borderWidth: 0.5,
    width: '100%',
    backgroundColor: '#1F222A',
    shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 1,
    borderColor: Colors.border,
    shadowColor: Colors.border,
    paddingLeft: hs(10),
    height: vs(36), // ✅ responsive height instead of height*6
  },
  inputContainer: {
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: fs(14), // ✅ responsive font
    color: Colors.text,
    // paddingVertical: vs(12),
    height: '100%',
    marginLeft: hs(12),
  },
  icon: {
    width: hs(24),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hs(10),
  },
  text: {
    width: hs(30),
    marginLeft: hs(10),
  },
});

export default CustomInput;
