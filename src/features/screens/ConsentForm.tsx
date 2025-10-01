import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { FC, useState } from 'react';
import CustomProgressbar from '../reusableComponents/CustomProgressbar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamsList } from '../../navigators/Types';
import { hs, vs, ms, fs } from '../../utils/Scaling';
import { Colors } from '../../utils/Constants';
import CustomInput from '../../components/home/CustomInput';
import Icons from '../../components/home/Icons';
import { RFValue } from 'react-native-responsive-fontsize';
import MultipleCheckbox from '../reusableComponents/MultipleCheckbox';
import SignatureBox from '../reusableComponents/SignatureBox';
import GenderModal from '../../components/modals/GenderModal';
import ConsentFormModal from '../../components/modals/ConsentFormModal';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Types';

type Props = NativeStackScreenProps<RootStackParamsList, "ConsentForm">;



const ConsentForm: FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(false);
  const [gender, setGender] = useState<string>("");
  const [genderVisible, setGenderVisible] = useState(false);
  const genderOptions = ["Male", "Female", "Other"];
  const [consentVisible, setConsentVisible] = useState(false);


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={styles.container}>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <View style={[{ paddingTop: insets.top }]}>
          <Text style={{ color: Colors.text, fontSize: fs(16) }}>Consent Form</Text>
          <CustomProgressbar
            steps={["Date & Time", "Payment", "Consent Form"]}
            currentStep={2}
          />
        </View>


        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.subContainer}>
            <View style={styles.contentContainer}>
              <Text style={[styles.text, , { fontSize: fs(16), fontWeight: '600' }]}>Consent & Health Declaration</Text>
              <Text style={[styles.text, { textAlign: 'center' }]}> Confirm your consent and share health info for safe treatment.</Text>
            </View>

            <View>
              <Text style={[styles.text]}>PerSonal Information</Text>
              <Text style={styles.text1}>Name</Text>
              <CustomInput placeholder='Enter your Name'
                left={null} marginT={vs(5)} marginB={vs(10)} right={false}
                secure={false}
              />
              <Text style={styles.text1}>DOB</Text>
              <CustomInput placeholder='Enter your DOB'
                left={<Icons iconFamily="Ionicons" name='calendar' size={RFValue(16)} color='#818191' />}
                marginT={vs(5)} marginB={vs(10)} right={false}
                rightIcon={<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: ms(5) }}
                  onPress={() => console.log('dfghjklghjklhjk')}>
                  <Icons iconFamily='Ionicons' name='caret-down-outline' size={RFValue(16)} color='#ffffff' />
                </TouchableOpacity>}
                secure={false}
              />
              <Text style={styles.text1}>Gender</Text>
              <CustomInput placeholder='Select your Gender'
                left={null} marginT={vs(5)} marginB={vs(10)} right={false}
                rightIcon={<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: ms(5) }}
                  onPress={() => setGenderVisible(true)}>
                  <Icons iconFamily='Ionicons' name='caret-down-outline' size={RFValue(16)} color='#ffffff' />
                </TouchableOpacity>}
                secure={false}
              />
              <Text style={styles.text1}>Phone Number</Text>
              <CustomInput placeholder='Enter your Phone Number'
                left={<Icons iconFamily='Ionicons' name='call-outline' size={RFValue(16)} color='#818191' />}
                marginT={vs(5)} marginB={vs(10)} right={false}
                secure={false}
              />
              <Text style={styles.text1}>Email</Text>
              <CustomInput placeholder='Enter your Email address'
                left={<Icons iconFamily='MaterialDesignIcons' name='email-outline' size={RFValue(16)} color='#818191' />}
                marginT={vs(5)} marginB={vs(10)} right={false}
                secure={false}
              />
              <Text style={styles.text1}>Emergency Contact</Text>
              <CustomInput placeholder='Enter Name'
                left={<Icons iconFamily='Ionicons' name='person-outline' size={RFValue(16)} color='#818191' />}
                marginT={vs(5)} marginB={vs(10)} right={false}
                secure={false}
              />
              <CustomInput placeholder='Enter Phone Number'
                left={<Icons iconFamily='Ionicons' name='call-outline' size={RFValue(16)} color='#818191' />}
                marginT={vs(5)} marginB={vs(5)} right={false}
                secure={false}
              />
            </View>

            <View>
              <Text style={[styles.text, { fontSize: fs(16), fontWeight: '500', marginVertical: vs(10) }]}>Medical History & Health Screening</Text>
              <Text style={styles.text1}>Do you have any of the following medical conditions?</Text>
              <CustomInput placeholder='Select Option'
                left={null} marginT={vs(5)} marginB={vs(10)} right={false}
                rightIcon={<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: ms(5) }}
                  onPress={() => console.log('dfghjklghjklhjk')}>
                  <Icons iconFamily='Ionicons' name='caret-down-outline' size={RFValue(16)} color='#ffffff' />
                </TouchableOpacity>}
                secure={false}
              />
              <Text style={styles.text1}>Please list any allergies</Text>
              <TextInput style={styles.descriptionInput}
                placeholder='write here'
              />
              <Text style={styles.text1}>Current medication or treatment</Text>
              <TextInput style={styles.descriptionInput}
                placeholder='write here'
              />
              <Text style={{ color: Colors.text, fontSize: fs(16) }}>Treatment consent</Text>
              <View style={styles.checkboxContainer}>
                <MultipleCheckbox />
              </View>
            </View>

            <View>
              <Text style={{ color: Colors.text , fontSize: fs(16)}}> Media Consent (Optional)</Text>
              <TouchableOpacity style={styles.checkbox2}
                onPress={() => setSelected(!selected)}>
                <Icons
                  iconFamily="MaterialDesignIcons"
                  name={selected ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  size={24}
                  color={selected ? '#F39E01' : '#ffffff'}
                />
                <Text style={styles.text1}>I allow the practitionor to take and use before & after photos for educational or marking purposes.</Text>
              </TouchableOpacity>
              <Text style={{ color: Colors.text , fontSize: fs(16)}}>Consent Confirmation</Text>
              <Text style={styles.text1}>Draw it in</Text>
              {/* <SignatureBox/> */}
            </View>

          </View>
        </ScrollView>

        <View style={[styles.bottomContainer,]}>
          <TouchableOpacity style={styles.previousBtn}
          //  onPress={() => navigation.navigate('BottomTab')}
          >
            <Text style={[styles.text, { color: '#ffffff' }]}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.consentBtn}
           onPress={() => setConsentVisible(true)}
          >
            <Text style={[styles.text, { color: '#ffffff' }]}>Submit</Text>
          </TouchableOpacity>
        </View>

        <GenderModal
        visible={genderVisible}
        onClose={() => setGenderVisible(false)}
        onSelect={(value) => setGender(value)}
      />
     <ConsentFormModal
  visible={consentVisible}
  onClose={() => setConsentVisible(false)}
  navigation={navigation} // TS now accepts stack navigation
/>

      </View>
    </KeyboardAvoidingView>
  )
};

export default ConsentForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C22"
  },
  header: {
    alignItems: 'center'
  },
  subContainer: {
    backgroundColor: Colors.background,
    paddingLeft: ms(10),
    paddingBottom: vs(5)
  },
  text: {
    color: Colors.text

  },
  text1: {
    color: '#f3f3f3'
  },
  contentContainer: {
    width: hs(300),
    alignItems: 'center',
    alignSelf: 'center'
  },
  descriptionInput: {
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: ms(10),
    width: '95%',
    height: vs(50),
    marginTop: vs(5),
    marginBottom: vs(10),
    padding: ms(5),
  },
  checkboxContainer: {
    width: '95%',
    backgroundColor: '#1C1C22',
    padding: vs(5),
    borderRadius: fs(5),
    marginTop: vs(5),
    marginBottom: vs(10),
  },
  checkbox2:{
    flexDirection: 'row',
    marginTop: vs(5),
    marginBottom: vs(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: vs(15),
    gap: hs(5)
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