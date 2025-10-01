import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, {FC, useState} from 'react'
import CustomHeader from '../../components/home/CustomHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icons from '../../components/home/Icons';
import {hs, vs, ms, fs, height} from '../../utils/Scaling';
import { Colors } from '../../utils/Constants';
import { TabParamList, RootStackParamsList } from '../../navigators/Types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import CustomModal from '../../components/modals/CustomModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




type RootNavigation = NativeStackNavigationProp<RootStackParamsList>;

// ✅ Tab navigation props
// type HomeScreenProps = BottomTabScreenProps<TabParamList, "Home">;
// ✅ Root navigation (for navigating to stack screens)
// type RootNav = NativeStackNavigationProp<RootStackParamsList>;

type MyBookingsScreenProps = BottomTabScreenProps<TabParamList, "My Bookings">;

const MyBookings: FC<MyBookingsScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const [type, setType] = useState('Upcoming');
  const [visible, setVisible] = useState(false); 
  const navigation = useNavigation<RootNavigation>();
  
  const today = new Date();

  // Format: "September 2025"
  const monthYear = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.headerContainer}>
        <CustomHeader title='My Bookings' backIcon={true} gap = {10}  backgroundColor='#1D1F22' onPress={() =>navigation.goBack()}/>
        <View style={styles.headerRightContainer}>
          <TouchableOpacity>
            <Icons name= 'calendar' size={fs(14)} color="#fff" iconFamily= 'Ionicons'/>
          </TouchableOpacity>
           <Text style={{color: '#ffff'}}>{monthYear}</Text>
            <TouchableOpacity style={styles.chevronDown}>
              <Icons
            name="chevron-down"
            size={fs(16)}
            iconFamily="Ionicons"
            color= '#fff'
          />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sort}>
              <Icons
              name='sort'
              size={fs(16)}
              color='#ffffff'
              iconFamily='MaterialDesignIcons'
            />
            </TouchableOpacity>
        </View>
      </View>

      {/* subContainer */}
      <View style={styles.subContainer}>
  
       <View style={styles.tabsContainer}>
        {['Upcoming', 'Completed', 'Cancelled'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabsBtn, type === tab && styles.activeTab]}
            onPress={() => setType(tab)}
          >
            <Text style={[styles.text2, type === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
       </View>

{/* cards */}
       <View style={styles.activeCard}>
        <View style={styles.activeCardTop}>
          <View style={{height: vs(15), width: hs(2), backgroundColor: Colors.secondary}}></View>
         <Text style={[styles.tex1, {fontWeight: 'bold', fontSize: fs(14)}]}>Active Service</Text>
        </View>
        <View style={styles.cardMiddle}>
           <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: ms(5)}}>
            <Text style={styles.tex1}>Booking Id: 34354354</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: hs(3)}}>
              <View style={{width: hs(5), height: hs(5), borderRadius: ms(5), backgroundColor: '#129120'}}></View>
              <Text style={styles.text2}>Started</Text>
            </View>
           </View>
           <Text style={styles.tex1}>Started On</Text>
        </View>

        <View style={styles.ActiveCardBottom}> 
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.tex1}>Session: </Text>
          <Text style={{color: '#1CDA30', fontSize: fs(16)}}>01</Text>
         </View>
         <TouchableOpacity style={styles.chevronContainer}>
          <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
         </TouchableOpacity>
        </View>
      </View>

       <View style={styles.bookingCards}>
        <View style={styles.cardTop}>
          <Text style={[styles.tex1, {fontWeight: 'bold', fontSize: fs(14)}]}>THE FADE FACTORY</Text>
        </View>
        <View style={styles.cardMiddle}>
           <Text style={styles.tex1}>Booking Id: 34354354</Text>
           <Text style={styles.tex1}>Started On</Text>
        </View>
        <View style={styles.cardBottom}> 
         <TouchableOpacity style={styles.cancelButton}
          onPress={()=> setVisible(true)}

         >
          <Text style={styles.text2}>Cancel Booking</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.text2}>View Details</Text>
         </TouchableOpacity>
        </View>
      </View>

      </View>

      {/* modal */}
      <CustomModal
        visible={visible}
        title="Cancel Appointment"
        message="Are you sure you want to cancel?"
        subMessage="Are you sure you want to cancel your appointment? Only 50% of the funds will be refunded to your account."
        primaryBtnLabel="Yes, Cancel Booking"
        secondaryBtnLabel="Keep Appointment"
        onPrimaryPress={() => {navigation.navigate('CancelAppointment');
          setVisible(false);
        }}
        onSecondaryPress={() => setVisible(false)}
        onClose={() => setVisible(false)}
      />
      
    </View>
  )
}

export default MyBookings

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1D1F22' 
  },
  tex1:{
   color: '#ffffff',
  },
  text2:{
   color: '#B9B9CB',
   fontSize: fs(12)
  },
  subContainer:{
   flex: 1,
   backgroundColor: '#0D1117'
  },
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#1D1F22'
  },
  headerRightContainer:{
    flexDirection: 'row',
    gap: ms(5), 
    alignItems: 'center'
  },
  chevronDown:{
    backgroundColor: '#21232B',
    borderRadius: ms(50),
    width:hs(28),
    height: hs(28),
    alignItems: 'center',
    justifyContent: 'center'
  },
  sort:{
    backgroundColor: '#21232B',
    borderRadius: ms(50),
    width:hs(28),
    height: hs(28),
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabsContainer:{
   flexDirection: 'row',
   justifyContent: 'space-around',
   marginVertical: ms(5),
   backgroundColor: '#1D1F22',
   borderRadius: ms(50)
  },
  tabsBtn: {
    width: '33%',
    paddingVertical: vs(5),
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    backgroundColor: Colors.primary,
    borderRadius: ms(50),
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  activeCard:{
    width: hs(330),
    height: vs(180),
    backgroundColor: '#1D1F22',
    borderRadius: ms(10),
    margin: ms(10),
    padding: ms(5),
    borderWidth: 1,
    borderColor: '#129120',
    elevation: 8
  },
  activeCardTop:{
    flexDirection: 'row',
    padding: ms(5),
    gap: hs(10),
    borderBottomWidth: 2, 
    borderBottomColor: '#3D3F58',
    borderStyle: 'dotted',
    height: vs(55)
  },
  ActiveCardBottom:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vs(10),
    height: vs(60),
    alignItems: 'center'
  },
  chevronContainer:{
    backgroundColor: '#21232B',
    borderRadius: ms(50),
    width:hs(28),
    height: hs(28),
    alignItems: 'center',
    justifyContent: 'center'
  },
    bookingCards:{
    width: hs(330),
    height: vs(180),
    backgroundColor: '#151515',
    borderRadius: ms(10),
    margin: ms(10),
    padding: ms(5),
    borderWidth: 1,
    borderColor: '#3D3F58'
  },
  cardTop:{
    flexDirection: 'row',
    padding: ms(5),
    gap: hs(10),
    height: vs(55)
  },
  cardMiddle:{
    height: vs(60),
    borderBottomWidth: 2, 
    borderBottomColor: '#3D3F58',
    borderStyle: 'dotted',
  },
  cardBottom:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: vs(10),
    height: vs(60),
    
  },
  cancelButton:{
    backgroundColor: '#3D3F58',
    borderRadius: ms(10),
    width: hs(120),
    height: vs(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsButton:{
    borderColor: '#F39E01',
    borderWidth: 1,
    borderRadius: ms(10),
    width: hs(120),
    height: vs(30),
    alignItems: 'center',
    justifyContent: 'center'
  }

})