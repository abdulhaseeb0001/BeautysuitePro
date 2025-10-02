import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, KeyboardAvoidingView, Platform } from 'react-native'
import React, { FC, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamsList } from '../../navigators/Navigator';
import { RootStackParamsList } from '../../navigators/Types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomInput from '../../components/home/CustomInput';
import MobileInput from '../../components/home/MobileInput';
import { Colors, Fonts } from '../../utils/Constants'
import { hs, vs, ms, fs } from '../../utils/Scaling';
import Icons from '../../components/home/Icons';
import CustomButton from '../../components/home/CustomButton'; 
import GenderModal from '../../components/modals/GenderModal';

import { useAppDispatch } from "../../redux/store";
import { signup } from "../../redux/slices/authSlice";


type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "Signup"
>;
type Props = {
  navigation: SignupScreenNavigationProp;
};
type CountryItem = {
  code: string;
  dial_code: string;
  name: string;
};
const Signup: FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [showeye, setShowEye] = useState(false);
  const [showeye1, setShowEye1] = useState(false);
  const [contact, setContact] = useState("");
  const [selected, setSelected] = useState(false);
  const [country, setCountry] = useState<CountryItem>({
    code: "IN",
    dial_code: "+91",
    name: "India",
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [gender, setGender] = useState<string>("");
  const [genderVisible, setGenderVisible] = useState(false);
  const genderOptions = ["Male", "Female", "Other"];

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useAppDispatch();

  const validate = () => {
    let valid = true;
    let tempErrors: { [key: string]: string } = {};

    if (!fullName.trim() || fullName.length < 3) {
      tempErrors.fullName = "Full name must be at least 3 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      tempErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!contact || contact.length < 8) {
      tempErrors.contact = "Enter a valid phone number";
      valid = false;
    }

    if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    if (!selected) {
      tempErrors.checkbox = "You must accept terms & privacy policy";
      valid = false;
    }
    if (!gender) {
      tempErrors.gender = "Please select gender";
      valid = false;
    }
    setErrors(tempErrors);
    return valid;
  };

  const handleSignup = () => {
    if (validate()) {
      dispatch(signup({ name: fullName, email }));
      navigation.navigate("BottomTab");
      
    }
  };


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
    style={[styles.container, { paddingTop: insets.top }]}
    >
      <TouchableOpacity style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.backIcon}
          source={require('../../assets/icons/leftChevron.png')}
        />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Create Account</Text>
      </View>
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
        <Text style={styles.text}>Full name</Text>
        <CustomInput style={styles.text}
          placeholder='Enter your no'
          left={false}
          right={false}
          marginB={7}
          marginT={5}
          secure={false}
          value={fullName}
          onChangeText={setFullName}
        />
        {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

        <Text style={styles.text}>Email Address</Text>
        <CustomInput
          placeholder='Enter your email address'
          left={false}
          right={false}
          marginB={7}
          marginT={5}
          secure={false}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <Text style={styles.text}>Gender</Text>
        <CustomInput placeholder={gender ? gender : "Select Gender"}
           left={null} marginT={vs(5)} marginB={vs(7)} right={false}
           rightIcon={<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: ms(5) }}
           onPress={() => setGenderVisible(true)}>
                  <Icons iconFamily='Ionicons' name='chevron-down' size={14} color='#f3f3f3' />
                </TouchableOpacity>}
           secure={false}
         />
          {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

        <Text style={styles.text}>mobile</Text>
        <MobileInput
          visible={visible}
          setVisible={setVisible}
          onPress={setCountry}
          setContact={setContact}
          contact={contact}
          placeHolder="Enter your phone"
          marginB={7}
          marginT={5}
          country={{ code: "IN", dial_code: "+91", name: "India" }}
        />
        {errors.contact && <Text style={styles.error}>{errors.contact}</Text>}

        <Text style={styles.text}>Password</Text>
        <CustomInput
          placeholder='enter a password'
          left={false}
          right={false}
          marginB={7}
          marginT={5}
          secure={!showeye}
          secureIcon={true}
          onPressVisible={() => setShowEye(!showeye)}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <Text style={styles.text}>Confirm Password</Text>
        <CustomInput
          placeholder='Re enter same password'
          left={false}
          right={false}
          marginB={7}
          marginT={5}
          secure={!showeye1}
          secureIcon={true}
          onPressVisible={() => setShowEye1(!showeye1)}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        )}
      </View>

      <View style={styles.CheckboxContainer}>
        <TouchableOpacity
          onPress={() => setSelected(!selected)}>
          <Icons
            iconFamily="MaterialDesignIcons"
            name={selected ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
            size={20}
            color={selected ? '#F39E01' : '#c2bebeff'}
          />
        </TouchableOpacity>
        <Text style={styles.text1}>I agree</Text>
        <TouchableOpacity onPress={() =>navigation.navigate('UserAgreement')}>
          <Text style={styles.text2}>User Agreement</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>and</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.text2}>Privacy and Policy</Text>
        </TouchableOpacity>
      </View>
      {errors.checkbox && <Text style={styles.error}>{errors.checkbox}</Text>}

      <CustomButton
        title='Signup'
        disabled={false}
        loading={false}
        btnHeight={48}
        btnWidth={371}
        onPress={handleSignup}
        
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("EmailLogin")}>
          <Text style={styles.footerLink}> Log in</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    
      {/* gender Modal */}
      <GenderModal
        visible={genderVisible}
        onClose={() => setGenderVisible(false)}
        onSelect={(value) => setGender(value)}
      />

  </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    paddingLeft: hs(5),
  },
  backContainer: {
    width: 31,
    height: 31,
    borderRadius: 10,
    borderColor: '#D8DADC',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  backIcon: {
    width: 11.92,
    height: 7.15,
    resizeMode: 'contain',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  headerContainer: {
    width: 358,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: "Beauty nigella",
    color: "#FFFFFF",
    marginVertical: 5,
  },
  subContainer:{
  paddingLeft: hs(5)
  },
  middleSection: {
    alignItems: 'center',
    width: hs(371)
  },
  mobileText: {
    fontSize: 15,
    color: "#ffffff",
    marginBottom: 10,
  },
  // genderContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   height: vs(36),
  //   backgroundColor: '#1F222A',
  //   borderRadius: ms(10),
  //   width: '95%',
  //   borderColor: Colors.border,
  //   borderWidth: 0.5,
  //   paddingLeft: hs(25),
  //   alignItems: 'center',
  //   paddingRight: hs(10),
  //   marginTop: vs(5),
  //   marginBottom: vs(10)

  // },
  genderText: {
    color: '#ffffff'
  },
  CheckboxContainer: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 10,
    paddingLeft: hs(5)
  },
  text1: {
    color: '#ffffff'
  },
  text2: {
    color: '#F39E01'
  },
  button: {
    backgroundColor: "#F2BA0C",
    borderRadius: 10,
    width: 360,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    alignSelf: 'center'
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  footer: {
    marginTop: vs(20),
    flexDirection: "row",
    width: 334,
    height: vs(20),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#ffffff",
    fontWeight: "semibold",
  },
  footerLink: {
    color: "#F39E01",
    fontWeight: "semibold",
  },
  error: {
    color: "red",
    fontSize: fs(12),
    marginTop: vs(2),
  },

});
