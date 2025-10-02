import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, {FC, useState} from 'react'
import CustomHeader from '../../components/home/CustomHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {hs, vs, fs, ms} from '../../utils/Scaling';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Types';
import WeeklyCalendar from '../reusableComponents/Calendar';
import CustomButton from '../../components/home/CustomButton';
import CustomProgressbar from '../reusableComponents/CustomProgressbar';


interface CustomProgressbarProps {
  steps: string[];
  currentStep: number;
}




const Time =[
  {
    id: '1', title: '12:00'
  },
  {
    id: '2', title: '12:15'
  },
  {
    id: '3', title: '12:30'
  },
  {
    id: '4', title: '12:45'
  },
  {
    id: '5', title: '01:00'
  },
  {
    id: '6', title: '01:15'
  },
  {
    id: '7', title: '01:30'
  },
  {
    id: '8', title: '12:00'
  },
  {
    id: '9', title: '12:00'
  },
  {
    id: '10', title: '12:00'
  },
  {
    id: '11', title: '12:00'
  },
  {
    id: '12', title: '12:00'
  },
  {
    id: '13', title: '12:00'
  },
]

type BookAppointmentScreenProp = NativeStackNavigationProp< RootStackParamsList, 'BookAppointment'>;
type Props = {
  navigation: BookAppointmentScreenProp;
};

const BookAppointment: FC<Props> = ({navigation}) => {
    const insets= useSafeAreaInsets();
    const [selectedTime, setSelectedTime] = useState<string | null> (null);

  return (
    <View style={[styles.conatainer, {paddingBottom: insets.bottom}]}>
      <View style={[{paddingTop: insets.top}]}>
        <CustomHeader title='Book Appointment' backIcon={true} backgroundColor='#1C1C22' gap={70} onPress={() =>navigation.goBack()}/>
        <CustomProgressbar
         steps={["Date & Time", "Payment", "Consent Form"]}
         currentStep={0}
         />
      </View>
     <ScrollView>
      <View style={styles.subContainer}>
       {/* card  */}
        <View style={styles.card}>
          <View style={styles.cardUpper}>
             <Image style = {styles.image}
               source={require('../../assets/images/fadeFactorySalon.png')}/>
             <View style={styles.upperRight}>
              <Text style={styles.text1}>The Fade Factory</Text>
              <Text style={styles.text2}>2715 Ash Dr. San Jose, South Dakota 83475</Text>
             </View>
          </View>
          <View style={styles.cardLower}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text style={[styles.text2, {color: '#E8A806'}]}>Service</Text>
               <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                 <Text style={styles.text2}>Total Session: </Text>
                 <Text style={[styles.text1, {color: '#1CDA30'}]}>03</Text>
               </View>
            </View>
              <Text style={styles.text1}>Permanent Makeup</Text>
              <Text style={styles.text2}>Long-lasting beauty for brows, eyes, and lips.</Text>
          </View> 
        </View> 

        <Text style={styles.text1}>Select Date</Text>
        <View style={styles.calendarContainer}>
          <WeeklyCalendar/>
        </View>

        <Text style={styles.text1}>Select Time</Text>
        <View style={styles.timeContainer}>
          <FlatList
            numColumns={4}
            data={Time}
            keyExtractor={(item) =>item.id.toString()}
            scrollEnabled={false}
            renderItem={({item}) =>{
              const isSelected = selectedTime === item.id;
              return(
                <View >
                  <TouchableOpacity style={[styles.timeButton, isSelected && styles.selectedTime ]}
                  // style={[styles.dayLabel, isSelected && styles.selectedText]}
                   onPress={() =>setSelectedTime(item.id)}
                  >
                    <Text style={styles.text2}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>

        {/* no slot available */}
        <View style={styles.waitCard}>
          <Image  style={{width: hs(30), height: hs(30), marginBottom: vs(20)}}
            source={require('../../assets/icons/clock.png')}/>
          <View style={styles.waitContent}>
            <Text style={styles.text1}>No Slots Available</Text>
            <Text style={[styles.text2, {textAlign: 'center', marginVertical: vs(5)}]}> Join our waiting list and we'll notify you if a slot becomes available.</Text>
          </View>
          <CustomButton
          title='Joint wait list'
          onPress={() =>navigation.navigate('JoinWaitlist')}
          disabled={false}
          loading={false}
          btnHeight= {48}
          btnWidth={300}
          />
        </View>
        
      </View>
    </ScrollView>
      
      <View style={styles.bottomContainer}>
        <CustomButton
          title='Continue'
          onPress={() =>navigation.navigate('Payment')}
          disabled={false}
          loading={false}
          btnHeight= {48}
        />
      </View>

    </View>
  )
}

export default BookAppointment

const styles= StyleSheet.create({
    conatainer:{
        flex: 1,
        backgroundColor: '#1C1C22'
    },
    subContainer:{
      flex: 1,
      backgroundColor: '#0D1117',
      paddingHorizontal: hs(5)
    },
    text1:{
      color: '#ffffff',
      fontSize: fs(17),
      fontWeight: 'medium',
    },
    text2:{
      color: '#D8DADC'
    },
    card:{
      backgroundColor: '#111111',
      marginVertical: vs(10),
      width: hs(340),
      borderWidth: 1,
      borderRadius: ms(10),
      borderColor: '#2A2A2A',
      padding: ms(10)
    },
    cardUpper:{
      flexDirection: 'row',
      gap: vs(10),
      borderBottomWidth: 2,
      borderBottomColor: "#2a2a2a",
      borderStyle: 'dotted',
      paddingBottom: vs(10)
    },
    image:{
      width: hs(84), height: vs(62),
      borderRadius: ms(10)
    },
    upperRight:{
      width: hs(220)
    },
    cardLower:{
      paddingTop: vs(10)
    },
    calendarContainer:{
      
    },
    timeContainer:{
      backgroundColor: "#111111", 
      padding: vs(10) ,
      borderRadius: ms(20),
      borderColor: '#2a2a2a',
      borderWidth: 1,
      marginVertical: vs(10) 
    },
    timeButton:{
      borderWidth: 1,
      borderColor: "#2a2a2a",
      borderRadius: ms(50),
      width: hs(70),
      height: vs(30),
      margin: ms(5),
      alignItems: 'center',
      justifyContent: 'center'
    },
    selectedTime:{
      backgroundColor: "#5c4a33ff",
      borderColor: "#F39E01",
    },
    bottomContainer:{
      paddingVertical: vs(10) ,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#363943',
      borderTopLeftRadius: ms(10),
      borderTopRightRadius: ms(10)
    },
    waitCard:{
      borderWidth: 1,
      borderRadius: ms(10),
      padding: ms(20),
      alignItems: 'center',
      backgroundColor: "#111111",
      borderColor: '#2A2A2A',
    },
    waitContent:{
      width: hs(270),
      alignItems: 'center',
      marginVertical: vs(10)
      
    }
})