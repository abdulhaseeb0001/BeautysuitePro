import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { FC, useState } from 'react';
import { Colors } from '../../utils/Constants';
import { fs, ms, hs, vs } from '../../utils/Scaling'
import Icons from '../../components/home/Icons';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomModal from '../../components/modals/CustomModal';


const Data = [
  {
    id: 1, name: 'Saloon', location: 'noida, sector 63', distance: '2km', rating: '4.5', reviews: '(300)'
  },
  {
    id: 2, name: 'Saloone', location: 'noida, sector 62', distance: '3km', rating: '4.5', reviews: '(300)'
  },
  {
    id: 3, name: 'Saloone', location: 'noida, sector 60', distance: '2.7km', rating: '4.5', reviews: '(300)'
  },
]

const FavouriteSaloon: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <View style={[styles.container]}>

      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <ScrollView horizontal>
                <View style={styles.card}>
                  <Image style={{ width: hs(70), height: hs(70), borderRadius: ms(5) }}
                    source={require('../../assets/images/fadeFactorySalon.png')} />
                  <View>
                    <View style={styles.cardRow1}>
                      <Text style={styles.text}>{item.name}</Text>
                      <Text style={{ color: Colors.text3 }}>{item.distance}</Text>
                    </View>
                    <TouchableOpacity style={styles.cardRow2}>
                      <Icons iconFamily='Feather' name='map-pin' size={RFValue(14)} color='#efefef' />
                      <Text style={{ color: Colors.text3 }}>{item.location}</Text>
                    </TouchableOpacity>
                    <View style={styles.cardRow3}>
                      <Icons iconFamily='Ionicons' name='star' color='#f39f39' size={RFValue(16)} />
                      <Text style={styles.text}>{item.rating}</Text>
                      <Text style={{ color: Colors.text3 }}>{item.reviews}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.deleteButton}
                 onPress={()=> setVisible(true)}
                >
                  <Icons iconFamily='MaterialDesignIcons' name='delete-outline' size={RFValue(30)} color='red' />
                </TouchableOpacity>
              </ScrollView>
            </View>
          )
        }}
      />

      {/* madal */}

      <CustomModal
        visible={visible}
        title="Remove from Favorites"
        message="Are you sure you want to remove this?"
        subMessage="Removing this salon will delete it from your saved favourites list."
        primaryBtnLabel="Yes, Remove Sloon"
        secondaryBtnLabel="Keep in Favorite"
        onPrimaryPress={() => {
          console.log("Removed");
          setVisible(false);
        }}
        onSecondaryPress={() => setVisible(false)}
        onClose={() => setVisible(false)}
      />
      

    </View>
  )
}

export default FavouriteSaloon

const styles = StyleSheet.create({
  container: {
    marginTop: vs(10)
  },
  card: {
    backgroundColor: "#1C1C22",
    flexDirection: 'row',
    width: hs(335),
    height: vs(80),
    borderRadius: ms(10),
    padding: ms(10),
    gap: hs(15),
    marginRight: hs(10),
    marginBottom: vs(10)
  },
  text: {
    color: Colors.text,
    fontSize: fs(15),
    fontWeight: '500'
  },
  cardRow1: {
    width: hs(230),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardRow2: {
    flexDirection: 'row',
    gap: hs(5)
  },
  cardRow3: {
    flexDirection: 'row',
    gap: hs(5)
  },
  deleteButton: {
    width: hs(62),
    height: vs(80),
    backgroundColor: '#553535ff',
    borderRadius: ms(10),
    marginRight: hs(30),
    alignItems: 'center',
    justifyContent: 'center',
  }
})