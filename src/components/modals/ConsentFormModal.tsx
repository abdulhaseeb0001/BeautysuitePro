import React, { FC } from "react";
import { Modal, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../utils/Constants";
import { hs, vs, ms, fs } from "../../utils/Scaling";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/Types";
import { CompositeNavigationProp } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
// import { RootStackParamsList, TabParamList } from '../../navigators/Types';
import { TabParamList } from "../../navigators/Types";


type ConsentFormModalNavProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamsList>,
  BottomTabNavigationProp<TabParamList>
>;

interface ConsentFormModalProps {
  visible: boolean;
  onClose: () => void;
  navigation?: any; // ignore type, allows passing your stack navigation
}

const ConsentFormModal: FC<ConsentFormModalProps> = ({
  visible,
  onClose,
  navigation,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image
            style={{ width: hs(50), height: hs(50), marginBottom: vs(10) }}
            source={require("../../assets/icons/checkedCircle.png")}
          />
          <Text style={{ color: Colors.text, fontSize: fs(16), fontWeight: "600" }}>
            Consent Form Submitted
          </Text>
          <Text style={{ color: Colors.text3, marginVertical: vs(10), textAlign: "center" }}>
            Thank you for completing the consent form. Your appointment is now confirmed.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onClose();
             navigation.navigate("BottomTab", {screen: 'My Bookings'});
            }}
          >
            <Text style={{ textAlign: "center", color: Colors.white }}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConsentFormModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: ms(20),
  },
  modalContent: {
    backgroundColor: "#1F222A",
    borderRadius: ms(20),
    padding: hs(30),
    alignItems: "center",
  },
  button: {
    borderRadius: ms(5),
    backgroundColor: Colors.primary,
    width: hs(100),
    height: vs(35),
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(20),
  },
});
