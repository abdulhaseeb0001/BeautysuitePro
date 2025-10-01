import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from "react-native";
import React, { FC, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/Types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomInput from "../../components/home/CustomInput";
import {hs, vs} from '../../utils/Scaling'
import CustomButton from "../../components/home/CustomButton"; 

type EmailLoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "EmailLogin"
>;

type Props = {
  navigation: EmailLoginScreenNavigationProp; 
};


const EmailLogin: FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const title = "BeautySuite Pro.";
  const [showPass, setShowPass] =useState(true)
  const [email, setEmail] = useState<string>('');
    
  const isValidEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
   };

  const handlePress = () => {
    if (!email) {
      Alert.alert('Validation Error', 'Email address is required.');
    } else if (!isValidEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
    } else {
      // Navigate to OTP screen if valid
      navigation.navigate('BottomTab');
    }
  };


  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title.split(" ").map((word, index) => (
            <Text
              key={index}
              style={[styles.title, word === "Pro." && { color: "#F39F01" }]}
            >
              {word}{" "}
            </Text>
          ))}
        </Text>
      </View>

      <View style={styles.logintextContainer}>
        <Text style={styles.loginTitle}>Login to your Account</Text>
        <Text style={styles.loginSubtitle}> Enter your Email Address to login</Text>
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.text}> Email Address</Text>
        <CustomInput
        placeholder="Enter your email"
        left = {false}
        right = {false}
        marginB={10}
        marginT={5}
        value={email}
        onChangeText={setEmail}
        secure={false}
        />
        <Text style={styles.text}>Password</Text>
       <CustomInput
        placeholder="Enter your Password"
        left = {false}
        right = {false}
        marginB={10}
        marginT={5}
        secure={showPass}
        secureIcon = {true}
        onPressVisible={() => setShowPass(!showPass)}
        />
      </View>

      <TouchableOpacity style={styles.forgotContainer}
        onPress={() =>navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton 
        title="Login"
        disabled={false}
        loading ={false}
        btnHeight={48}
        btnWidth={371}
        onPress={handlePress}      
      />

      <View style={styles.signinWith}>
        <View style={styles.line} />
        <Text style={styles.signinWithText}>or sign in with </Text>
        <View style={styles.line} />
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.logo}>
          <Image source={require("../../assets/icons/facebook.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logo}>
          <Image source={require("../../assets/icons/google.png")} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.emailSignin}
        onPress={() =>navigation.navigate('Login')}
      >
        <Text style={styles.emailText}>Sign in with Mobile Number</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.footerLink}> Please Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    alignItems: 'center'
    
  },
    titleContainer: {
    alignItems: "center",
    top: 20
  },
  title: {
    fontSize: 28,
    fontFamily: "Beauty nigella",
    color: "#FFFFFF",
  },
  logintextContainer: {
    width: 358,
    alignItems: "center",
    marginTop: 60,
  },
  loginTitle: {
    fontSize: 27,
    fontFamily: "Beauty nigella",
    color: "#FFFFFF",
    marginVertical: 5,
  },
  loginSubtitle: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  middleSection: {
    height: vs(112),
    marginTop: vs(40),
    marginBottom: vs(10),
  },
 text: {
    fontSize: 15,
    color: "#ffffff",
  },
  forgotContainer:{
    height: vs(20),
    alignItems: 'flex-end',
    paddingRight: hs(20),
    marginVertical: vs(10),
    width: hs(371)
  },
  forgotText:{
    color: '#F39F01',
    alignSelf: 'flex-end'
  },
  button: {
    width: vs(371),
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  signinWith: {
    marginTop: 100, marginBottom: 10,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    gap: hs(10)

  },
  signinWithText: {
    color: "#FFFFFF",
    fontSize: 15,
    
  },
  line: {
  width: 106,
  height: 1,
  backgroundColor: "#868383",
},
  logoContainer: {
    flexDirection: "row",
    width: 111,
    height: 50,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#5d5d60ff",
    backgroundColor: "#1F222A",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  emailSignin: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#F39F01",
    width: 360,
    height: 48,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  emailText: {
    color: "#F39F01",
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: "row",
    width: 334,
    height: 18,
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

});
