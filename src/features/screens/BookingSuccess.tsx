import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hs, vs, ms, fs } from '../../utils/Scaling'
import CurrentDateTime from '../reusableComponents/CurrentDateTime';
import Icons from '../../components/home/Icons';
import { RootStackParamsList } from '../../navigators/Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type BookingSuccessProps = NativeStackScreenProps<RootStackParamsList, 'BookingSuccess'>;

const BookingSuccess: FC<BookingSuccessProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top , paddingBottom: insets.bottom}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Image style={styles.image}
            source={require("../../assets/icons/succesvector.png")} />
          <Text style={[styles.text, { fontSize: fs(20), fontWeight: '600' }]}>Your Booking is Confirmed!</Text>
          <Text style={[styles.text1, { textAlign: 'center' }]}>Thank you for your payment. We look forward to seeing you soon.</Text>
        </View>
        {/* card1 */}
        <View style={styles.card1}>
          <View style={styles.card1Row1}>
            <View style={{ flexDirection: 'row', gap: ms(10) }}>
              <View style={{ width: hs(2), height: vs(20), backgroundColor: "#F39E01" }}></View>
              <Text style={[styles.text, { fontSize: fs(15), fontWeight: 'bold' }]}>My Schedule</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.text, { color: '#E8A806' }]}>See Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card1Row2}>
            <Image style={styles.saloonImage}
              source={require("../../assets/images/fadeFactory.png")} />
            <View>
              <Text style={[styles.text, { fontSize: fs(15), fontWeight: 'medium' }]}>The Fade Factory</Text>
              <Text style={[styles.text1,]}>2715 Ash Dr. San Jose, South Dakota 83475</Text>
            </View>
          </View>
          <View style={styles.card1Row3}>
            <Text style={[styles.text1, { fontWeight: '600' }]}>Date & Time</Text>
            <View style={{ flexDirection: 'row', gap: hs(10), marginVertical: vs(5) }}>
              <Icons name="time-outline" size={20} color="#ececec" iconFamily="Ionicons" />
              <CurrentDateTime />
            </View>
            <Text style={[styles.text, { color: '#E8A806' }]}>Service</Text>
            <View style={styles.card1Bottom}>
              <Image style={{ width: hs(50), height: hs(50), borderRadius: ms(5) }}
                source={require('../../assets/images/blisStudio.png')} />
              <View>
                <Text style={[styles.text, { fontSize: fs(15), fontWeight: '600' }]}>Permanent Makeup</Text>
                <Text style={[styles.text1]}>Long-lasting beauty for brows, eyes,.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* card2 */}
        <View style={styles.card2}>
          <View style={styles.card2Row1}>
            <View style={{ width: hs(2), height: vs(20), backgroundColor: "#F39E01" }}></View>
            <Text style={[styles.text, { fontSize: fs(15), fontWeight: 'bold' }]}>Payment Summary</Text>
          </View>

          <View style={styles.card2Mid}>
            <View style={{ gap: vs(10) }}>
              <Text style={styles.text1}>Total Amount:</Text>
              <Text style={styles.text1}>Amount Paid</Text>
              <Text style={styles.text1}>Pending Amount:</Text>
              <Text style={styles.text1}>Transaction ID:</Text>
              <Text style={styles.text1}>Status:</Text>
              <Text style={styles.text1}> Payment Method:</Text>
            </View>
            <View style={{ gap: vs(10) }}>
              <Text style={[styles.text, { fontWeight: '600' }]}> $64.00</Text>
              <Text style={[styles.text, { fontWeight: '600' }]}>$43.00</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { fontWeight: '600' }]}>$21.00</Text>
                <TouchableOpacity style={styles.payBtn}>
                  <Text style={[styles.text]}>Pay Now</Text>
                </TouchableOpacity>
              </View>
              <Text style={[styles.text]}> #ED63546498GFH</Text>
              <View>
                <Text style={[styles.text, { color: "#05A660" }]}>Success</Text>
              </View>
              <Text style={[styles.text]}>Credit Card</Text>
            </View>
          </View>

          <View style={styles.card2Bottom}>
            <Text style={[styles.text1, { fontWeight: '600' }]}>Total</Text>
            <Text style={[styles.text, { color: "#F39E01", fontWeight: '600' }]}>$64.00</Text>
          </View>

        </View>

      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.previousBtn}
          onPress={() => navigation.navigate('BottomTab', { screen: 'Home' })}  >
          <Text style={[styles.text, { color: '#ffffff' }]}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.consentBtn}
          onPress={() => navigation.navigate("ConsentForm")}
        >
          <Text style={[styles.text, { color: '#ffffff' }]}>Consent Form</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default BookingSuccess

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121111',
    padding: ms(5)
  },
  topContainer: {
    alignItems: 'center',
    marginTop: vs(30),
    marginBottom: vs(10),
    width: hs(300),
    alignSelf: 'center'
  },
  image: {
    width: hs(50),
    height: hs(50)
  },
  text: {
    color: "#ffffff",
  },
  text1: {
    color: "#ECECEC"
  },
  card1: {
    width: hs(340),
    padding: ms(10),
    borderWidth: 1,
    borderRadius: ms(10),
    backgroundColor: '#1B1B1B',
    borderColor: "#2a2a2a",
    marginBottom: vs(10)
  },
  card1Row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#3D3F58',
    borderBottomWidth: 1.5,
    paddingBottom: vs(10)
  },
  card1Row2: {
    flexDirection: 'row',
    gap: ms(10),
    paddingVertical: vs(10),
    borderBottomColor: '#3D3F58',
    borderBottomWidth: 2,
    borderStyle: 'dotted'
  },
  saloonImage: {
    width: hs(80),
    height: vs(60),
    borderRadius: ms(10),

  },
  card1Row3: {
    marginTop: vs(10)
  },
  card1Bottom: {
    flexDirection: 'row',
    backgroundColor: "#2B2B32",
    padding: ms(10),
    borderRadius: (10),
    gap: hs(10),
    marginTop: vs(10)
  },
  card2: {
    width: hs(340),
    padding: ms(10),
    borderWidth: 1,
    borderRadius: ms(10),
    backgroundColor: '#1B1B1B',
    borderColor: "#2a2a2a",
    marginBottom: vs(10)
  },
  card2Row1: {
    flexDirection: 'row',
    gap: hs(10),
    borderBottomColor: '#3D3F58',
    borderBottomWidth: 1.5,
    paddingBottom: vs(10)
  },
  card2Mid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vs(10),
    borderBottomColor: '#3D3F58',
    borderBottomWidth: 2,
    borderStyle: 'dotted'
  },
  card2Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vs(10)
  },
  payBtn: {
    borderRadius: ms(5),
    backgroundColor: "#F39E01",
    marginLeft: hs(10),
    width: hs(60),
    height: vs(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: vs(10),
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#363943',
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20),
  },
  previousBtn: {
    width: hs(130),
    height: vs(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(10),
    borderWidth: 2,
    borderColor: '#454F5D'
  },
  consentBtn: {
    width: hs(130),
    height: vs(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(10),
    backgroundColor: '#F2BA0C',
  },
})