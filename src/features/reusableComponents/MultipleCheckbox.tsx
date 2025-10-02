import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from '../../components/home/Icons';
import { hs, vs, fs, ms } from '../../utils/Scaling';
import { Colors } from '../../utils/Constants';

export interface CheckboxOption {
  id: number;
  label: string;
}

interface MultipleCheckboxProps {
  options: CheckboxOption[];
  onChange?: (selected: number[]) => void;
  checkboxColor?: string;
  multiple?: boolean;                       // ✅ new prop
}

const MultipleCheckbox: React.FC<MultipleCheckboxProps> = ({
  options,
  onChange,
  checkboxColor = Colors.primary,
  multiple = true,                          // ✅ default is multiple selection
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleCheckbox = (id: number) => {
    setSelected((prev) => {
      let updated: number[];

      if (multiple) {
        updated = prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      } else {
        updated = prev.includes(id) ? [] : [id]; // ✅ only one selection
      }

      onChange?.(updated);
      return updated;
    });
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.option}
          onPress={() => toggleCheckbox(option.id)}
        >
          <View
            style={[
              styles.customBox,
              selected.includes(option.id) && { backgroundColor: checkboxColor, borderColor: checkboxColor },
            ]}
          >
            {selected.includes(option.id) && (
              <Icons
                iconFamily="MaterialDesignIcons"
                name="check"
                size={fs(16)}
                color="#fff"
              />
            )}
          </View>

          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MultipleCheckbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(10),
    height: vs(25),
  },
  customBox: {
    width: hs(20),
    height: hs(20),
    borderRadius: ms(5),
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },


  label: {
    marginLeft: hs(10),
    fontSize: fs(12),
    color: Colors.text3,
  },
});
