import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from '../../components/home/Icons';
import { hs, vs, fs } from '../../utils/Scaling';
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
          <View style={styles.iconWrapper}>
            <Icons
              iconFamily="MaterialDesignIcons"
              name={selected.includes(option.id) ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={20}
              color={selected.includes(option.id) ? checkboxColor : '#ffffff'}
            />
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
    marginBottom: vs(12),
    height: vs(20),
  },
  iconWrapper: {
    borderRadius: 5,  
    overflow: 'hidden',
  },
  label: {
    marginLeft: hs(10),
    fontSize: fs(12),
    color: Colors.text3,
  },
});
