import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import React, { FC, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/Types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MobileInput from "../../components/home/MobileInput";
import CustomButton from "../../components/home/CustomButton";


type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "Login"
>;
type Props = {
  navigation: LoginScreenNavigationProp; 
};
type CountryItem = {
  code: string;
  name: string;
  dial_code: string;
};


const Login: FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const title = "BeautySuite Pro.";

    const [visible, setVisible] =useState(false);
    const [contact, setContact] = useState("");
    const [country, setCountry] = useState<CountryItem>({
      code: "IN",
      dial_code: "+91",
      name: "India",
    });

    const handleLogin = () => {
  if (contact.trim().length !== 10) {
    Alert.alert("Enter a valid mobile number");
  } else {
    navigation.navigate("LoginOtp", {
      selectedMobile: contact,
      selectedCode: country.dial_code,  // ✅ only pass code
    });
  }
};

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom}]}>
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
        <Text style={styles.loginSubtitle}>  Enter your phone number to login </Text>
      </View>

      <MobileInput
        visible={visible}
        setVisible={setVisible}
        onPress={setCountry}
        country={country}
        setContact={setContact}
        contact={contact} 
        placeHolder="Enter your phone"
        marginB={10}
        marginT={5}
      />

      <CustomButton
        title="Send Verification Code"
        disabled={false}
        loading={false}
        btnHeight= {48}
        onPress={handleLogin}
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
        onPress={() =>navigation.navigate('EmailLogin')}
      >
        <Text style={styles.emailText}>Sign in with Email</Text>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
   alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontFamily: "Beauty nigella",
    color: "#FFFFFF",
  },
  titleContainer: {
    alignItems: "center",
    top: 20
  },
  logintextContainer: {
    width: 358,
    height: 123,
    alignItems: "center",
    marginTop: 100,
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
    height: 76,
    width: 360,
    marginVertical: 10,
  },

  signinWith: {
    marginTop: 170, marginBottom: 10,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10

  },
  signinWithText: {
    color: "#FFFFFF",
    fontSize: 15
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
