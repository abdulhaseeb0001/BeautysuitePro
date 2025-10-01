import { 
  View, 
  Text, 
  TouchableOpacity, 
  ImageBackground, 
  Image, 
  StyleSheet, 
  FlatList 
} from 'react-native';
import React, { FC, useState } from 'react';
import { RootStackParamsList } from '../../navigators/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hs, vs, ms, fs } from '../../utils/Scaling';
import Icons from '../../components/home/Icons';
import Services from '../reusableComponents/Services';

type SaloonDetailsScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'SaloonDetails'
>;

type Props = {
  navigation: SaloonDetailsScreenProp;
};

interface TabItem {
  id: string;
  title: string;
  value: string;
}

const Tabs: TabItem[] = [
  { id: '1', title: 'Services', value: 'Services' },
  { id: '2', title: 'Gallery', value: 'Gallery' },
  { id: '3', title: 'About Us', value: 'About Us' },
  { id: '4', title: 'Artists/Professionals', value: 'Artists/Professionals' },
  { id: '5', title: 'Reviews & Ratings', value: 'Reviews & Ratings' },
];

const SaloonDetails: FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [type, setType] = useState<string>(Tabs[0].value); // default: first tab

  const renderContent = () => {
    switch (type) {
      case 'Services':
        return  <Services/>;       
      case 'Gallery':
        return <Text style={styles.contentText}>Gallery Content</Text>;
      case 'About Us':
        return <Text style={styles.contentText}>About Us Content</Text>;
      case 'Artists/Professionals':
        return <Text style={styles.contentText}>Artists/Professionals Content</Text>;
      case 'Reviews & Ratings':
        return <Text style={styles.contentText}>Reviews & Ratings Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container,{paddingBottom: insets.bottom}]}>
      {/* Top Image Section */}
      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={require('../../assets/images/fadeFactorySalon.png')}
          imageStyle={{ width: hs(350), height: vs(230) }}
        >
          <View style={[styles.header, { paddingTop: insets.top}]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icons
                name="arrow-back"
                size={fs(20)}
                iconFamily="Ionicons"
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons
                name="search"
                size={fs(20)}
                color="#ffffff"
                iconFamily="Ionicons"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.favContainer}>
            <Icons
                 name='heart-outline'
                 size={20}
                 color='#ffffff'
                 iconFamily='Ionicons'
            /> 
            <Text style={[styles.text1, {fontSize: fs(11)}]}>Favourite</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Action Row */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: vs(15), height: vs(15) }}
            source={require('../../assets/icons/call.png')}
          />
          <Text style={styles.text1}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: vs(15), height: vs(15) }}
            source={require('../../assets/icons/pinmap.png')}
          />
          <Text style={styles.text1}>Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: vs(15), height: vs(15) }}
            source={require('../../assets/icons/share.png')}
          />
          <Text style={styles.text1}>Share</Text>
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Icons
            name='star'
            size={15}
            iconFamily='Ionicons'
            color='#FEB052'
          />
          <Text style={styles.text1}>4.5</Text>
        </View>
      </View>

      {/* Salon Info */}
      <View>
        <Text style={{ color: '#ffffff', fontSize: fs(18) , fontWeight: 'bold'}}>
          THE FADE FACTORY
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: vs(15), height: vs(15) }}
            source={require('../../assets/icons/pinmap.png')}
          />
          <Text style={styles.text1}>
            1234 Ash, Dr Joe, South Dakota-23445
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <FlatList
          horizontal
          data={Tabs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.tabs,
                type === item.value && { borderColor: '#F39E01' }, // highlight active
              ]}
              onPress={() => setType(item.value)}
            >
              <Text
                style={[
                  styles.text1,
                  type === item.value && { fontWeight: 'bold', color: '#F39E01' },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Content Area */}
      <View style={styles.contentContainer}>
         {renderContent()}
      </View>
    </View>
  );
};

export default SaloonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  backgroundImageContainer: {
    height: vs(230),
    width: hs(350),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hs(10),
  },
  text1: {
    color: '#ffffff',
    marginLeft: 5,
  },
favContainer: {
  alignItems: 'center',
  alignSelf: 'flex-end',
  marginTop: vs(130),
  marginRight: hs(10)
},

  actionRow: {
    flexDirection: 'row',
    gap: hs(20),
    marginVertical: vs(10),
    padding: ms(10),
    borderBottomWidth: 2,
    borderStyle: 'dotted',
    borderBottomColor: '#2A2A2A',
  },
  tabsContainer: {
    margin: ms(10),
    height: vs(42),
    borderBottomColor: '#2A2A2A',
    borderBottomWidth: 2,
    paddingBottom: vs(10)
  },
  tabs: {
    backgroundColor: '#121212',
    height: vs(30),
    paddingHorizontal: hs(10),
    marginRight: hs(10),
    borderRadius: ms(10),
    borderWidth: 1,
    borderColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer:{
    flexDirection: 'row',
    marginLeft: hs(30),
    backgroundColor: '#1E1E1E',
    paddingVertical: vs(5),
    paddingHorizontal: hs(10),
    borderRadius: ms(10)
  },
  contentContainer: {
    flex: 1,
    padding: ms(5),
    width: hs(373)
  },
  contentText: {
    color: '#ffffff',
    fontSize: fs(16),
  },
});
