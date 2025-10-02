import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
import { Colors, Fonts } from '../../utils/Constants';
import Icons from '../../components/home/Icons';
import CustomText from './CustomText';
import { hs, vs, ms, fs } from '../../utils/Scaling';

interface InputProps {
  title?: string;
  left?: React.ReactNode;
  onClear?: () => void;
  onPressVisible?: () => void;
  right?: boolean;
  rightIcon?: React.ReactNode;
  marginB?: number;
  marginT?: number;
  secureIcon?: boolean;
  secure?: boolean;
}

const CustomInput: FC<InputProps & React.ComponentProps<typeof TextInput>> = ({
  title,
  left,
  onClear,
  right = false,
  rightIcon,
  marginB = 0,
  marginT = 0,
  secure = false,
  secureIcon,
  onPressVisible,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false); // ✅ track focus state

  return (
    <View style={[styles.container, { marginTop: vs(marginT), marginBottom: vs(marginB) }]}>
      {title && (
        <CustomText
          fontFamily="Medium"
          fontSize={fs(12)}
          style={{ marginBottom: vs(6) }}
        >
          {title}
        </CustomText>
      )}

      <View
        style={[
          styles.flexRow,
          { borderColor: isFocused ? Colors.primary : Colors.border }, // ✅ dynamic border
        ]}
      >
        {left && <View style={styles.leftWrapper}>{left}</View>}

        <TextInput
          {...props}
          style={styles.inputContainer}
          placeholderTextColor={Colors.disabled}
          secureTextEntry={secure}
          onFocus={() => setIsFocused(true)}  // ✅ change state
          onBlur={() => setIsFocused(false)} // ✅ reset state
        />

        {/* Clear button */}
        {props?.value?.length !== 0 && right && !secureIcon && (
          <TouchableOpacity style={styles.iconWrapper} onPress={onClear}>
            <Icons
              iconFamily="Ionicons"
              name="close-circle-sharp"
              size={fs(18)}
              color={'#ccc'}
            />
          </TouchableOpacity>
        )}

        {/* Secure toggle */}
        {secureIcon && !right && (
          <TouchableOpacity style={styles.iconWrapper} onPress={onPressVisible}>
            <Icons
              iconFamily="Ionicons"
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={fs(16)}
              color={'#ccc'}
            />
          </TouchableOpacity>
        )}

        {/* Custom right icon */}
        {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ms(10),
    borderWidth: 0.5,
    borderColor: Colors.border,
    backgroundColor: '#1F222A',
    paddingLeft: hs(10),
    height: vs(40),
  },
  inputContainer: {
    flex: 1,
    fontFamily: Fonts.Regular,
    fontSize: fs(14),
    color: Colors.text,
    marginLeft: hs(10),
  },
  leftWrapper: {
    marginRight: hs(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: hs(6),
  },
});

export default CustomInput;
