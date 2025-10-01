
import React, { FC, useState, useEffect} from 'react';
import {  View,Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Types';
import { OtpInput } from 'react-native-otp-entry';
import CustomHeader from '../../components/home/CustomHeader';
import {hs, vs, fs} from '../../utils/Scaling';
import CustomButton from '../../components/home/CustomButton';

type ResetCodeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'ResetCode'
>;

type Props = {
  navigation: ResetCodeScreenNavigationProp;
  route: any;
};

const ResetCode: FC<Props> = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
//   const { selectedMobile, selectedCountry } = route.params;
const {email}= route.params;
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
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Back button */}
      <CustomHeader
         backIcon={true} 
         title='Forgot Password'
         gap = {100}
         onPress={() => navigation.goBack()}
         borderBottomWidth={1}
         borderBottomColor='#686C7B'
      />
      
     <View style={styles.titlesContainer}>
        <Text style={styles.title}>Authentication Code</Text>
        <Text style={styles.subtitle}>Enter 5-digit code we just texted to your Email {email}</Text>
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
              width: hs(56),
              height: hs(56),
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
          <Text style={styles.text}>  Did not recieve the code? </Text>
          <TouchableOpacity>
            <Text style={[styles.text, {color: '#F39F01'}]}>Resend</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={[styles.text, {alignSelf: 'center'}]}>Send code again: {timer}s</Text>
      )} 

      <CustomButton
        title='Continue'
        disabled={false}
        loading={false}
        btnHeight= {48}
        onPress={() => {
          if (otp && otp.toString().length === 5) {
            navigation.navigate('ResetPassword');
          } else {
           Alert.alert('Please enter a valid OTP');
          }
           }}  
        />

    </View>
  );
};

export default ResetCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117',
    flex: 1,
    paddingLeft: 10,
  },
  titlesContainer:{
       width: hs(354),
       height: vs(80),
       marginVertical: vs(20),
       paddingRight: hs(60),
     },
     title:{
         color: '#ffffff',
         fontFamily: 'Beauty nigella',
         fontSize: 28
     },
     subtitle:{
         color: '#ffffff',
         fontSize: 16,
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
    alignItems: 'center',
    marginTop: vs(50),
    marginBottom: vs(10),
  },

});
