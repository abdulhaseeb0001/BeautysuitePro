import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native'
import React, { FC, useState } from 'react'
import { Colors } from '../../utils/Constants'
import { fs, ms, hs, vs } from '../../utils/Scaling'
import Icons from '../../components/home/Icons'
import CustomButton from '../../components/home/CustomButton'
import CustomModal from '../../components/modals/CustomModal'

const Data = [
  {
    id: 1, name: 'Madeline Scott', rating: '4.9/5',
    image: require('../../assets/images/madeline.png'), specialty: 'Scar & Stretch Mark Specialist'
  },
  {
    id: 2, name: 'Emily Carter', rating: '4.5/5',
    image: require('../../assets/images/Emily.png'), specialty: 'Lip Blush & Eyeliner Tattoo Artist'
  },
  {
    id: 3, name: 'Chloe Bennett', rating: '4.5/5',
    image: require('../../assets/images/chole.png'), specialty: 'Microblading'
  },
  {
    id: 4, name: 'Madeline Scott', rating: '4.9/5', 
    image: require('../../assets/images/madeline.png'), specialty: 'Scar & Stretch Mark Specialist'
  },
  {
    id: 5, name: 'Chloe Bennett', rating: '4.5/5', 
    image: require('../../assets/images/chole.png'), specialty: 'Microblading'
  },
  {
    id: 6, name: 'Emily Carter', rating: '4.5/5', 
    image: require('../../assets/images/Emily.png'), specialty: 'Lip Blush & Eyeliner Tattoo Artist'
  },
]

const FavouriteArtist: FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => setVisible(true)}>
            {/* Image container */}
            <View style={styles.imageContainer}>
              <Image style={styles.Image} source={item.image} />
              {/* Heart icon */}
              <TouchableOpacity style={styles.heartIcon}>
                <Icons name="heart" size={16} color="red" iconFamily="Ionicons" />
              </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: 4 }}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text2}>{item.specialty}</Text>
              <Text style={styles.text2}>{item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={3}
      />

      {/* Modal */}
      {/* <Modal transparent visible={visible} animationType="slide" onRequestClose={() => setVisible(false)} >
        <View style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <View style={{width: hs(35), height: vs(3), borderRadius: 3, backgroundColor: '#ffffff', marginBottom: vs(10)}}></View>
          <Text style={{color: Colors.text, fontSize: fs(18), marginBottom: 10, fontWeight: '600'}}>Remove from Favorites</Text>
          <Text style={{ color: '#fff', fontSize: fs(14), marginBottom: 10, fontWeight: '600' }}>Are you sure you want to remove this?</Text>
          <Text style={{color: Colors.text,}}>Removing this salon will delete it from your saved favourites list.</Text>
          <TouchableOpacity style={styles.modalBtn1}>
            <Text style={{color: Colors.text, fontWeight: '600'}}>Yes, Remove Salon</Text>
          </TouchableOpacity>
          <CustomButton
            title="Keep in Favorite"
            onPress={() => setVisible(false)}
            disabled={false}
            loading={false}
            btnHeight={vs(38)}
            btnColor="#F2BA0C"
            textColor='#000'
          />
          </View>
        </View>
      </Modal> */}
      
      <CustomModal
        visible={visible}
        title="Remove from Favorites"
        message="Are you sure you want to remove this?"
        subMessage="Removing this salon will delete it from your saved favourites list."
        primaryBtnLabel="Yes, Remove Artist"
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

export default FavouriteArtist

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#111111",
    borderRadius: ms(10),
    borderWidth: 1,
    borderColor: '#2a2a2a',
    width: hs(110),
    height: vs(170),
    marginRight: hs(5),
    marginBottom: vs(5),
    overflow: 'hidden'
  },
  imageContainer: {
    position: 'relative',
  },
  Image: {
    width: hs(110),
    height: hs(110),
    borderTopLeftRadius: ms(10),
    borderTopRightRadius: ms(10),
  },
  heartIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 3,
  },
  text: {
    color: Colors.text,
    fontSize: fs(12),
    fontWeight: '600',
  },
  text2: {
    color: Colors.text3,
    fontSize: fs(10),
  },
  modalContainer:{ 
    flex: 1, 
    justifyContent: 'flex-end',
  },
  modalSubContainer:{
    backgroundColor: '#1c1c22',
    alignItems: 'center',
    paddingBottom: vs(20),
    padding: ms(5),
    borderTopLeftRadius: ms(20),
    borderTopRightRadius: ms(20)

  },
  modalBtn1:{
    height: vs(38),
    width: hs(320),
    borderRadius: ms(10),
    borderWidth: 1, 
    borderColor: Colors.primary,
    marginVertical: vs(10),
    alignItems: 'center',
    justifyContent: 'center'
  }
})
