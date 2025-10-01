import { View, Text , StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import React, {FC} from 'react';
import {hs, vs, fs, ms} from '../../utils/Scaling';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamsList } from '../../navigators/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../utils/Constants';

interface cardItem {
    id: number;
    title: string;
    subtitle: string;
    fee: string;
    time: string;
    image: any;
}
const ServiceCard: cardItem[] =[
    {
        id: 1, title: "Permanent Makeup", subtitle: "Long-lasting beauty for brows, eyes, and lips.", fee: "$500.00", time: "2 hrs 30 mins",
        image: require('../../assets/images/blisStudio.png'),
    },
    {
        id: 2, title: "Eyebrow Microblading", subtitle: "Realistic hair strokes for fuller brows.", fee: "$300.00", time: "3hrs",
        image: require('../../assets/images/blisStudio.png'),
    },
    {
        id: 3, title: "Powder Brows", subtitle: "Soft, shaded brows with a polished look.", fee: "$400.00", time: "2hrs",
        image: require('../../assets/images/blisStudio.png'),
    },
    {
        id: 4, title: "Permanent Makeup", subtitle: "Soft, shaded brows with a polished look.", fee: "$600.00", time: "2hrs",
        image: require('../../assets/images/blisStudio.png'),
    },
]

// type ServicesProp = {
//   navigation: NativeStackNavigationProp<RootStackParamsList>;
// };

const Services: FC = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  return (
    <View style={{paddingBottom: insets.bottom}}>
      <Text style={{color: '#ffffff'}}> All Services</Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ServiceCard}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=> {
             return(
                <View style={styles.cards}>
                  <Image style={styles.image}
                  source={item.image}/>  
                  <View>

                    <View style={styles.contentContainer}>
                       <Text style={styles.text1}>{item.title}</Text>
                       <Text style={[styles.text2, {color: '#BDBDBD'}]}>{item.subtitle}</Text>    
                    </View>
                    <View style={styles.cardBottom}>
                       <View style={{flexDirection: 'row', gap: ms (10)}}>
                          <Text style={[styles.text1, {color: '#F0B60A'}]}>{item.fee}</Text>
                          <Text style={[styles.text2, {color: '#BDBDBD'}]}>{item.time}</Text> 
                        </View>  
                       <TouchableOpacity style={styles.button}
                        onPress={()=>navigation.navigate('BookAppointment')}
                       >
                        <Text style={[styles.text2, {fontWeight: 'bold'}]}>Book Now</Text>  
                       </TouchableOpacity> 
                    </View>

                  </View>
                </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
    cards:{
     backgroundColor: "#121212" ,
     width: hs(340), 
     height: hs(105),
     flexDirection: 'row',
     padding: ms(5),
     marginVertical: ms(10),
     borderRadius: ms(10),
     borderWidth: 1,
     borderColor: '#2A2A2A',
     alignItems: 'center',
     gap: hs(5)
    },
    image:{
        width: hs(92),
        height: hs(92),
        borderRadius: ms(10)
    },
    text1:{
        color: '#ffffff',
        fontSize: fs(14),
        fontWeight: 'semibold'
    },
    text2:{
        color: '#ffffff',
        fontSize: fs(11)
    },
    contentContainer:{
        width: hs(180),
        marginBottom: vs(10)
    },
    cardBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: hs(230),
        alignItems: 'center'
    },
    button:{
        backgroundColor: Colors.primary,
        borderRadius: ms(50),
        width: hs(80),
        height: vs(25),
        alignItems: 'center',
        justifyContent: 'center',
    }
})