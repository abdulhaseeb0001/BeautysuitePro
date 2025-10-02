import React, { FC, useState, useEffect} from 'react';
import {  View,Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Types';
import { OtpInput } from 'react-native-otp-entry';
import CustomButton from '../../components/home/CustomButton';


type LoginOtpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'LoginOtp'
>;

type Props = {
  navigation: LoginOtpScreenNavigationProp;
  route: any;
};

const LoginOtp: FC<Props> = ({ navigation, route }) => {
  const { selectedMobile, selectedCode ,} = route.params;
  const insets = useSafeAreaInsets();
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [resendOtp, setResendOtp] = useState(false);

useEffect(() => {    
  let interval: number | null = null;
  if (timer > 0) {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  } else {
    setResendOtp(true);
    if (interval) clearInterval(interval);
  }
  return () => {
    if (interval) clearInterval(interval);
  };
}, [timer]);

  const handleResend = () => {
    setResendOtp(false);
    setTimer(30);
    Alert.alert('OTP has been resent!');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Back button */}
      <TouchableOpacity style={styles.iconcontainer}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.icon}
          source={require('../../assets/icons/leftChevron.png')}
        />
      </TouchableOpacity>

      {/* Header */}
      <View>
        <Text style={styles.headertext}>Enter Code</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We’ve sent an SMS with an activation code to your phone
             {selectedCode}{selectedMobile}
          </Text>
        </View>
      </View>

      {/* OTP Input */}
      <View style={styles.OtpInput}>
        <OtpInput 
          numberOfDigits={5}
          focusColor="#F39F01"
          autoFocus={false}
          hideStick={true}
          placeholder=" "
          blurOnFilled={true}
          disabled={false}
          type="numeric"
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onFilled={(text) => {
            setOtp(text);
            console.log(`OTP is ${text}`);
          }}
          textInputProps={{
            accessibilityLabel: 'One-Time Password',
          }}
          textProps={{
            accessibilityRole: 'text',
            accessibilityLabel: 'OTP digit',
            allowFontScaling: false,
          }}
          theme={{
            containerStyle: {
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            },
            pinCodeContainerStyle: {
              width: 60,
              height: 70,
            },
            pinCodeTextStyle: {
              color: "#FFFFFF",   
              fontSize: 22,       
              fontWeight: "bold", 
            },
          }}
        />
      </View>

      {/* Resend OTP */}
      {resendOtp ? (
        <View style={styles.resendContainer}>
          <Text style={styles.text}>  I didn't recieve a code </Text>
          <TouchableOpacity onPress={handleResend}>
            <Text style={[styles.text, {color: '#F39F01'}]}>Resend</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={[styles.text, {alignSelf: 'center'}]}>Send code again: {timer}s</Text>
      )} 

      <View style={styles.btnContainer}>
        <CustomButton 
        title="Send Verification Code"
        disabled={false}
        loading={false}
        btnHeight= {48}
        btnWidth={355}
        onPress={() => {
          if (otp && otp.toString().length === 5) {
            navigation.navigate('BottomTab');
          } else {
           Alert.alert('Please enter a valid OTP');
          }
        }}
      />
      </View>
    </View>
  );
};

export default LoginOtp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117',
    flex: 1,
    paddingLeft: 10,
  },
  iconcontainer: {
    width: 39,
    height: 39,
    borderRadius: 10,
    borderColor: '#D8DADC',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
    icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
    headertext: {
    fontSize: 30,
    color: '#ffffff',
    fontFamily:'Beauty nigella',
  },
  textContainer:{
    width: 322, height: 40,
    marginVertical: 20,
  },
  text: {
    color: '#F9F9F9',
    fontSize: 16,
  },
  OtpInput:{
    height: 72,
    marginVertical: 20,
  },
  resendContainer:{
    flexDirection: 'row',
    justifyContent: 'center',

  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
  // btntxt: {
  //   fontSize: 16,
  //   color: '#ffffff',
  //   fontWeight: 'bold',
  // },
});
