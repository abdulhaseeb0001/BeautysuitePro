import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import CustomHeader from '../../components/home/CustomHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { hs, vs, ms, fs } from '../../utils/Scaling'
import { TabParamList } from '../../navigators/Types'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { Colors } from '../../utils/Constants'
import FavouriteSaloon from '../reusableComponents/FavouriteSaloon';
import FavouriteArtist from '../reusableComponents/FavouriteArtist'

type MyFavouriteScreenProps = BottomTabScreenProps<TabParamList, "My Favourite">

interface TabItem {
  id: string;
  title: string;
  value: string;
}

const Tabs: TabItem[] = [
  { id: '1', title: 'Saloon', value: 'Saloon' },
  { id: '2', title: 'Artists/Professionals', value: 'Artists/Professionals' },
]

const MyFavourite: FC<MyFavouriteScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets()
  const [type, setType] = useState<string>(Tabs[0].value)

  const renderContent = () => {
    switch (type) {
      case 'Saloon':
        return <FavouriteSaloon/>
      case 'Artists/Professionals':
        return <FavouriteArtist/>
      default:
        return null
    }
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <CustomHeader
          title='My Favourites'
          backIcon={true}
          gap={10}
          backgroundColor='#1D1F22'
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* subContainer */}
      <View style={styles.subContainer}>
       {/* tabs */}
        <View style={styles.tabsContainer}>
          {Tabs.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[styles.tabsBtn, type === item.value && styles.activeTab]}
              onPress={() => setType(item.value)}
            >
              <Text style={[styles.text2, type === item.value && styles.activeTabText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content Area */}
        <View style={styles.contentContainer}>
          {renderContent()}
        </View>
      </View>
    </View>
  )
}

export default MyFavourite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1F22'
  },
  text1: {
    color: '#ffffff',
    marginLeft: 5,
  },
  text2: {
    color: '#B9B9CB',
    fontSize: fs(14)
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#0D1117',
    paddingHorizontal: vs(5)
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D1F22'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ms(5),
    backgroundColor: '#1D1F22',
    borderRadius: ms(50)
  },
  tabsBtn: {
    width: '45%',
    paddingVertical: vs(5),
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    backgroundColor: Colors.primary,
    borderRadius: ms(50),
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#ffffff',
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
})
