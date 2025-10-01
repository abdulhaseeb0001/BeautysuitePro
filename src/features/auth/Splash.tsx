import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { FC, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../navigators/Types";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const Splash: FC = () => {
 type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "Splash"
>;

const navigation = useNavigation<SplashScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, isFocused]);

  return (
    <View style={[styles.container,{paddingBottom: insets.bottom} ]}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/Union.png")}
      >
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/logoApp.png")} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Powered by BeautySuite Pro.</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
  },
  backgroundImage: {
    flex: 1,
    width: 287, height: 459,
  },
  imageContainer: {
    width: 201,
    height: 129,
    marginTop: 373,
    marginLeft: 100,
  },
  textContainer: {
    flex: 1,
    width: 400,
    justifyContent:'flex-end',
    alignItems: "center",
    paddingBottom: 20,
  },
  text: {
    color: "#ffffff",
    fontWeight: "400",
    alignSelf: "center",
  },
});
