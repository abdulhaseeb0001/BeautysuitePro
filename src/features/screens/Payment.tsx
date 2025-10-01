import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, {FC, useState} from 'react'
import CustomHeader from '../../components/home/CustomHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {hs, vs, fs, ms} from '../../utils/Scaling';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Types';
import CustomProgressbar from '../reusableComponents/CustomProgressbar';
import CurrentDateTime from '../reusableComponents/CurrentDateTime';




interface bookingPaymentCard {
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

type PaymentScreenProp = NativeStackNavigationProp< RootStackParamsList, 'Payment'>;
type Props = {
  navigation: PaymentScreenProp;
};

const Payment: FC<Props> = ({navigation}) => {
    const insets= useSafeAreaInsets();
    const [selectedTime, setSelectedTime] = useState<string | null> (null);

  return (
    <View style={[styles.conatainer, {paddingBottom: insets.bottom}]}>
      <View style={[{paddingTop: insets.top}]}>
        <CustomHeader title='Book Appointment' backIcon={true} backgroundColor='#1C1C22' gap={70} onPress={() =>navigation.navigate("BottomTab")}/>
        <CustomProgressbar
         steps={["Date & Time", "Payment", "Consent Form"]}
         currentStep={1}
         />
      </View>
     <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={[styles.text1, {fontSize: fs(16)}]}>Permanent Makeup</Text>
              <Text style={styles.text2}>Long-lasting beauty for brows, eyes, and lips.</Text>
          </View>
          <View style={styles.cardBottom}>
            <CurrentDateTime/> 
            <Text style={styles.text1}>$64</Text>
          </View>
        </View> 

       {/* moreServices */}
       <View style={styles.moreServices}>
        <Text style={[styles.text2, {color: '#ffffff', fontSize: fs(14)}]}>Add More Services</Text>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.text2}>+ Add</Text>
        </TouchableOpacity>
       </View>
       
       <View style={styles.bookingPaymentCard}>
         <Text style={[styles.text2, {fontSize: fs(15), fontWeight: 'semibold', marginBottom: vs(5)}]}>Booking Payment</Text>
         <View style={styles.paymentRows}>
            <Text style={[styles.text2, {color: '#ffffff'}]}>Pay Now</Text>
            <Text style={[styles.text2, {color: '#E8A806'}]}>$20.00</Text>
         </View>
         <View style={styles.paymentRows}>
            <Text style={[styles.text2, {color: '#ffffff'}]}> Pay later (Due at Service)</Text>
            <Text style={[styles.text2, {color: '#E8A806'}]}>$30.00</Text>
         </View>
         <View style={[styles.paymentRows, {borderTopWidth: 2, borderTopColor: '#454F5D', borderStyle: 'dotted', marginTop: vs(5)}]}>
            <Text style={[styles.text2, {color: '#ffffff'}]}>Total</Text>
            <Text style={[styles.text2, {color: '#E8A806'}]}>$50.00</Text>
         </View>
       </View>

       <View style={styles.paymentMethodCard}>
        <Text style={styles.text1}>Payment Methods</Text>
        <View style={styles.paymentCardMid}>
         <View style={styles.cardIconContainer}>
            <Image source={require('../../assets/icons/cardIcon.png')}/>
         </View>
         <View>
            <Text style={styles.text2}>Payment Method</Text>
            <Text style={[styles.text2, {color: '#ffffff', fontWeight: 'semibold'}]}>Credit Card **** 2333</Text>
         </View>
        </View>
        <TouchableOpacity style={styles.methodButton}>
            <Text style={[styles.text2, {color: '#E8A806'}]}>Change Payment Method</Text>
        </TouchableOpacity>
       </View>

      </View>
    </ScrollView>
      
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.previousBtn}
         onPress={() => navigation.goBack()}
        >
            <Text style={[styles.text2, {color: '#ffffff'}]}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.payBtn}
         onPress={() => navigation.navigate("BookingSuccess")}
        >
            <Text style={[styles.text2, {color: '#ffffff'} ]}>Pay Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Payment

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
    cardBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    moreServices:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ms(5)
    },
    addButton:{
        backgroundColor: '#1C2433',
        borderRadius: ms(8),
        width: hs(60),
        height: vs(25),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#454F5D'
    },
    bookingPaymentCard:{
      backgroundColor: '#151B23',
      padding: ms(10),
      borderRadius: ms(10),
      width: hs(340),
      marginVertical: vs(10)
    },
    paymentRows:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: vs(5)
    },
    paymentMethodCard:{
      backgroundColor: '#151B23',
      padding: ms(10),
      borderRadius: ms(10),
      width: hs(340),
      marginVertical: vs(10)
    },
    paymentCardMid:{
      flexDirection: 'row',
      gap: hs(10),
      marginVertical: vs(10)
    },
    cardIconContainer:{
      width: hs(40),
      height: hs(40),
      borderRadius: ms(50),
      backgroundColor: '#2a2a2a' ,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    methodButton:{
      width: hs(300),
      height: hs(40),
      borderRadius: ms(10),
      borderWidth: 1,
      borderColor: '#E8A806',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: vs(10)
    },

    bottomContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',  
      paddingVertical: vs(10) ,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#363943',
      borderTopLeftRadius: ms(20),
      borderTopRightRadius: ms(20), 
    },
    previousBtn:{
        width: hs(130),
        height: vs(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ms(10),
        borderWidth: 2,
        borderColor: '#454F5D'
    },
    payBtn:{
        width: hs(130),
        height: vs(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ms(10),
        backgroundColor: '#F2BA0C',
    },
})