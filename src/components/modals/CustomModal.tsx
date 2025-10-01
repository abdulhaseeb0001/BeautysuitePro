// components/common/CustomModal.tsx
import React, { FC } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { hs, vs, ms, fs } from "../../utils/Scaling";
import { Colors } from "../../utils/Constants";
import CustomButton from "../home/CustomButton";

interface CustomModalProps {
  visible: boolean;
  title: string;
  message: string;
  subMessage?: string;
  primaryBtnLabel: string;
  secondaryBtnLabel: string;
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
  onClose: () => void;
}

const CustomModal: FC<CustomModalProps> = ({
  visible,
  title,
  message,
  subMessage,
  primaryBtnLabel,
  secondaryBtnLabel,
  onPrimaryPress,
  onSecondaryPress,
  onClose,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          {/* drag handle */}
          <View style={styles.handle} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          {subMessage && <Text style={styles.subMessage}>{subMessage}</Text>}

          <TouchableOpacity style={styles.modalBtn1} onPress={onPrimaryPress}>
            <Text style={{ color: Colors.text, fontWeight: "600" }}>
              {primaryBtnLabel}
            </Text>
          </TouchableOpacity>

          <CustomButton
            title={secondaryBtnLabel}
            onPress={onSecondaryPress}
            disabled={false}
            loading={false}
            btnHeight={vs(38)}
            btnColor={Colors.secondary}
            textColor="#000"
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalSubContainer: {
    backgroundColor: "#1c1c22",
    alignItems: "center",
    paddingBottom: vs(20),
    padding: ms(5),
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20),
  },
  handle: {
    width: hs(35),
    height: vs(3),
    borderRadius: 3,
    backgroundColor: "#ffffff",
    marginBottom: vs(10),
  },
  title: {
    color: Colors.text,
    fontSize: fs(18),
    marginBottom: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  message: {
    color: "#fff",
    fontSize: fs(14),
    marginBottom: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  subMessage: {
    color: Colors.text,
    textAlign: "center",
    marginBottom: vs(10),
  },
  modalBtn1: {
    height: vs(38),
    width: hs(320),
    borderRadius: ms(10),
    borderWidth: 1,
    borderColor: Colors.primary,
    marginVertical: vs(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
