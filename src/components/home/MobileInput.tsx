import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import { Colors, Fonts } from '../../utils/Constants';
import CustomText from './CustomText';
import Icons from './Icons';
import { hs, vs, fs, ms, winHeight } from '../../utils/Scaling';
import { CountryPicker } from 'react-native-country-codes-picker';
import CountryFlag from 'react-native-country-flag';

interface MobileInputProps {
  visible: boolean;
  onPress: (c: any) => void;
  setVisible: (contact: boolean) => void;
  country: CountryItem;
  setContact: (contact: string) => void;
  contact: string;
  placeHolder?: string;
  title?: string;
  marginB?: number;
  marginT?: number;
}

type CountryItem = {
  code: string;
  dial_code: string;
  name: string;
};

const MobileInput: FC<MobileInputProps> = ({
  visible,
  setVisible,
  onPress,
  country,
  setContact,
  contact,
  placeHolder,
  title,
  marginB = 0,
  marginT = 0,
}) => {
  const [isFocused, setIsFocused] = useState(false); // ✅ track focus state

  const handleSelectCountry = (c: any) => {
    setVisible(false);
    onPress(c);
  };

  return (
    <View style={[styles.mainContainer, { marginTop: vs(marginT), marginBottom: vs(marginB) }]}>
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
          styles.container,
          { borderColor: isFocused ? Colors.primary : Colors.border }, // ✅ dynamic border
        ]}
      >
        <View style={styles.subcontainer}>
          <CountryFlag
            style={{
              width: hs(30),
              height: hs(20),
              borderWidth: 1,
              borderColor: Colors.border,
            }}
            isoCode={country.code.toLocaleLowerCase()}
            size={ms(25)}
          />
          <CustomText fontSize={fs(10)} fontFamily="Regular" color="#8C9096">
            {' '}
            {country.code}
          </CustomText>

          {/* Country Picker Button */}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Icons
              name="chevron-down"
              size={fs(14)}
              iconFamily="Ionicons"
              color={Colors.disabled}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Dial code */}
        <CustomText
          fontSize={fs(10)}
          fontFamily="Regular"
          style={{ marginRight: hs(6), color: '#8C9096' }}
        >
          {country.dial_code}
        </CustomText>

        {/* Input */}
        <TextInput
          placeholder={placeHolder ?? 'Enter your phone number'}
          placeholderTextColor={Colors.disabled}
          value={contact}
          onChangeText={setContact}
          style={styles.inputContainer}
          keyboardType="number-pad"
          maxLength={10}
          onFocus={() => setIsFocused(true)}  // ✅ activate highlight
          onBlur={() => setIsFocused(false)}  // ✅ reset
        />
      </View>

      {/* Country Picker Modal */}
      <CountryPicker
        enableModalAvoiding
        show={visible}
        onBackdropPress={() => setVisible(false)}
        pickerButtonOnPress={(item) => handleSelectCountry(item)}
        popularCountries={['IN', 'US', 'UK']}
        lang="en"
        style={{
          modal: {
            height: winHeight * 0.5,
            borderTopLeftRadius: ms(12),
            borderTopRightRadius: ms(12),
            backgroundColor: '#fff',
          },
          textInput: {
            borderBottomWidth: 1,
            margin: hs(10),
          },
          countryButtonStyles: {
            paddingVertical: vs(5),
          },
          flag: {
            fontSize: fs(20),
          },
          dialCode: {
            fontWeight: 'bold',
          },
          countryName: {
            fontSize: fs(14),
          },
        }}
      />
    </View>
  );
};

export default MobileInput;

const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
    marginBottom: vs(20),
  },
  container: {
    height: vs(40),
    borderRadius: ms(10),
    borderColor: Colors.border,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: hs(8),
    backgroundColor: '#1F222A',
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hs(4),
  },
  divider: {
    width: hs(1),
    height: '60%',
    backgroundColor: Colors.border,
    marginHorizontal: hs(5),
  },
  inputContainer: {
    flex: 1,
    fontFamily: Fonts.Medium,
    color: Colors.text,
    fontSize: fs(14),
    height: '90%',
  },
  flagWrapper: {
    width: hs(30),
    height: hs(30),
    borderRadius: ms(15),
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: hs(6),
  },
});
