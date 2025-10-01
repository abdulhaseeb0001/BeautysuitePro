import React, { FC } from "react";
import {Modal, TouchableOpacity, View, Text,StyleSheet,} from "react-native";
import { Colors, Fonts } from "../../utils/Constants"; // adjust path
import { fs, hs, vs, ms } from "../../utils/Scaling";   // adjust path

interface GenderModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}

const genderOptions = ["Male", "Female", "Other"];

const GenderModal: FC<GenderModalProps> = ({ visible, onClose, onSelect }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          {genderOptions.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.option}
              onPress={() => {
                onSelect(item);
                onClose();
              }}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default GenderModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#1F222A",
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20),
    padding: hs(20),
  },
  option: {
    paddingVertical: vs(12),
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  optionText: {
    color: "#fff",
    fontSize: fs(14),
    fontFamily: 'Roboto'
  },
});
