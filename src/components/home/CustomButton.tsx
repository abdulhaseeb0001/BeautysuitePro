import { StyleSheet, TouchableOpacity, ActivityIndicator, DimensionValue } from 'react-native';
import React, { FC } from 'react';
import CustomText from './CustomText';
import { Colors } from '../../utils/Constants';
import { ms, s, vs,} from 'react-native-size-matters'; // ✅ responsive scaling
import { fs } from '../../utils/Scaling';
 
interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled: boolean;
    loading: boolean;
    btnWidth?: DimensionValue | undefined;
    btnHeight?: DimensionValue | undefined;
    btnColor?: string;
    textColor?: string;
}
 
const CustomButton: FC<ButtonProps> = ({
    title,
    onPress,
    disabled,
    loading,
    btnWidth = '95%',
    btnHeight,
    btnColor,
    textColor,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.button,
                {
                    backgroundColor: disabled ? Colors.disabled : btnColor ? btnColor : Colors.buttonColor,
                    width: btnWidth,
                    height: btnHeight ?? vs(50), // ✅ vertical scaling for height
                },
            ]}
            disabled={disabled}
        >
            {loading ? (
                <ActivityIndicator size={'small'} color={'#fff'} />
            ) : (
                <CustomText
                    style={[{ color: textColor || Colors.black }, styles.text]}
                    fontFamily='Regular'
                    fontSize={fs(11)} // ✅ responsive text size
                >
                    {title}
                </CustomText>
            )}
        </TouchableOpacity>
    );
};
 
const styles = StyleSheet.create({
    button: {
        paddingVertical: vs(10), // ✅ vertical scaling
        paddingHorizontal: s(12), // ✅ horizontal scaling
        borderRadius: ms(10), // ✅ proportional radius
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        
    },
});
 
export default CustomButton;