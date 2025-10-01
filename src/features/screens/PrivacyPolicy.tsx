import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { FC } from 'react'
import { RootStackParamsList } from '../../navigators/Types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Colors } from '../../utils/Constants';
import {fs, ms, hs, vs} from '../../utils/Scaling'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomHeader from '../../components/home/CustomHeader';

type PrivacyPolicyScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "PrivacyPolicy"
>;
type Props = {
  navigation: PrivacyPolicyScreenNavigationProp;
};

const PrivacyPolicy: FC<Props> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View>
        <CustomHeader title='Privacy Policy' backIcon={true} backgroundColor='#2a2a2a' gap={hs(80)} onPress={() => navigation.goBack()}/>
      </View>
      <View style={styles.subContainer}>
        <ScrollView>
          <Text style={styles.text1}>Condition & Attending</Text>
          <View style={styles.container1}> 
            <Text style={styles.text2}>
              At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere,
              quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis.
              Paulum, cum regem Persem captum adduceret, eodem flumine invectio?

            </Text>
            <Text style={styles.text2}>
              Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.
              Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.
              Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.
            </Text>
          </View>
          <Text style={styles.text1}>Terms & Use</Text>
          <View style={styles.container1}>
            <Text style={styles.text2}>
              Ut proverbia non nulla veriora sint quam vestra dogmata.
              Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet.
              Omnes enim iucundum motum, quo sensus hilaretur. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba.
              Quibusnam praeteritis? Portenta haec esse dicit, quidem hactenus; Si id dicis, vicimus.
              Qui ita affectus, beatum esse numquam probabis; Igitur neque stultorum quisquam beatus neque sapientium non beatus.

            </Text>
            <Text style={styles.text2}>
              Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim.
              Dolor ergo, id est summum malum, metuetur semper, etiamsi non ader.

            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2a2a2a'
  },
  subContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: ms(10)
  },
  text1:{
    color: Colors.text,
    fontSize: fs(14),
    fontWeight: '600',
    marginVertical: vs(10)
  },
  text2:{
    color: Colors.text3,
    marginBottom: vs(10)
  },
  container1:{
    marginBottom: vs(10)
  },
  container2:{
    marginBottom: vs(10)
  }
})