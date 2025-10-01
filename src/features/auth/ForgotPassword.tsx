import { View, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import React, {FC, useState} from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Types'; 
import CustomHeader from '../../components/home/CustomHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../utils/Constants';
import { hs, vs, ms, fs } from '../../utils/Scaling';
import CustomInput from '../../components/home/CustomInput';
import CustomButton from '../../components/home/CustomButton';

type ForgotPasswordScreensNavigationProp = NativeStackNavigationProp<
RootStackParamsList, 
"ForgotPassword"
>;
type Props={
  navigation: ForgotPasswordScreensNavigationProp
};
 
const ForgotPassword: FC<Props> = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState<string>('');

    const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSendCode = () => {
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Email address is required.');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    // ✅ Pass email to ResetCode screen
    navigation.navigate('ResetCode', { email });
  };

  return (
    <View style={[styles.container, {paddingTop:insets.top}]}>
      <CustomHeader 
         backIcon={true} 
         title='Forgot Password'
         gap = {100}
         onPress={() => navigation.goBack()}
         borderBottomWidth={1}
         borderBottomColor='#686C7B'
         />  

      <View style={styles.subContainer}>
       <View style={styles.titlesContainer}>
         <Text style={styles.title}>Lets Reset Your Password</Text>
         <Text style={styles.subtitle}>Enter your email or phone to send verification code</Text>
       </View>
      <View style={styles.emailInputContainer}>
        <Text style={styles.text}>Email</Text>
        <CustomInput 
          placeholder='Enter your email adress'
          left= {false}
          right={false}
          marginT={10}
          marginB={10}
          value={email}
          onChangeText={setEmail}
          secure={false}
        />
      </View>
      </View>
      <CustomButton
      title='Send Verification Code'
      onPress={handleSendCode}
      disabled={false}
      loading={false}
      btnHeight= {48}
      />
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.background,
       
    },
    subContainer:{
        paddingLeft: hs(10),
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
    text:{
        color: Colors.text
    },
    emailInputContainer:{
        width: hs(371),
        height: vs(78.82),
        paddingRight: hs(20)
    }
})