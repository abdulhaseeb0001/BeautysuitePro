import { View, Text , StyleSheet, TouchableOpacity, Image, } from 'react-native'
import React, {FC} from 'react';
import {fs, ms, hs, vs} from '../../utils/Scaling';
import { Colors } from '../../utils/Constants';
import CustomHeader from '../../components/home/CustomHeader';


const Notification: FC = () => {
  return (
    <View style={[styles.container]}>
        <View>
            <CustomHeader title='Notifications' backIcon={true} backgroundColor="#1d1f22"/>
        </View>
      <View style={styles.subContainer}>
        <Text style={{color: Colors.text, fontSize: fs(15)}}>All Notifications</Text>
        <Text style={{color: Colors.text}}>Today</Text>
        <View>
          <Text style={{color: Colors.text, fontSize: fs(15)}}>New Apointment Booked</Text>
          <Text style={{color: Colors.text3}}>message</Text>
        </View>
        <View>
          <Text style={{color: Colors.text, fontSize: fs(15)}}>New Apointment Booked</Text>
          <Text>message</Text>
        </View>
        <Text style={{color: Colors.text, fontSize: fs(15)}}>Yestarday</Text>
        <View>
          <Text style={{color: Colors.text, fontSize: fs(15)}}>New Apointment Booked</Text>
          <Text style={{color: Colors.text3}}>message</Text>
        </View>
        <View>
          <Text style={{color: Colors.text, fontSize: fs(15)}}>Your Consent Form is Signed</Text>
          <Text style={{color: Colors.text3}}>message</Text>
        </View>
        <View>
          <Text style={{color: Colors.text, fontSize: fs(15)}}>Pyment recieved</Text>
          <Text style={{color: Colors.text3 }}>message</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification

const styles =StyleSheet.create({
    container: {
       backgroundColor: "#1d1f22"
    },
    subContainer:{
      flex: 1,
    }
})