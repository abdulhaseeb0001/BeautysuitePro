import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/home/CustomHeader';
import {hs, vs, ms, fs} from '../../utils/Scaling'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MultipleCheckbox , {CheckboxOption} from '../reusableComponents/MultipleCheckbox';
import { Colors } from '../../utils/Constants';
import { RootStackParamsList } from '../../navigators/Types';
import { useNavigation } from '@react-navigation/native';


const myOptions: CheckboxOption[] = [
    { id: 1, label: 'I want to reschedule my appointment' },
    { id: 2, label: 'I chose a different artist or salon' },
    { id: 3, label: 'I no longer need the service' },
    { id: 4, label: 'I had a bad experience previously' },
    { id: 5, label: 'Found a better price elsewhere' },
    { id: 6, label: 'I booked by mistake' },
    { id: 7, label: 'personal reasons' },
    { id: 8, label: 'other' },
  ];

const CancelAppointment = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <CustomHeader title='Cancel Appointment' backIcon={true} gap={hs(50)} onPress={()=>navigation.goBack()} /> 
      <View style={styles.subContainer}>
        <Text style={{color: Colors.text, fontSize: fs(14), fontWeight: '600', marginBottom: vs(10)}}>Please Select Reason for Cancellation</Text>
        <View style={styles.checkboxContainer}>
          <MultipleCheckbox
           options={myOptions}
           onChange={(selected) => console.log('Selected IDs:', selected)}
           checkboxColor='#B1C5FF'
           multiple={false}
          />     
        </View>
      </View>
    </View>
  )
}

export default CancelAppointment

const styles = StyleSheet.create({
 container:{
   flex: 1,
   backgroundColor: Colors.background,
 }, 
 subContainer:{
  flex: 1,
  backgroundColor: "#111111",
  padding: ms(5)
 }, 
 checkboxContainer:{
  borderRadius: ms(20),
  backgroundColor: "#151B23", 
  padding: ms(10),
  width: hs(335),
  height: vs(300)
 }
})