import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hs, vs, fs, ms } from "../../utils/Scaling";
import { Colors } from "../../utils/Constants";
import Icons from "../../components/home/Icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList, RootStackParamsList } from "../../navigators/Types";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";



const beautyServices = [
  {
    id: "1",
    title: "THE FADE FACTORY",
    status: "Open Now",
    timing: "08:00-10:00",
    image: require("../../assets/images/fadeFactory.png"),
    distance: "1.7km",
    rating: "4.5",
  },
  {
    id: "2",
    title: "HAIR BLISS STUDIO",
    status: "Open Now",
    timing: "08:00-10:00",
    image: require("../../assets/images/blisStudio.png"),
    distance: "1.7km",
    rating: "4.3",
  },
  {
    id: "3",
    title: "ZEN SKINCARE & SPA",
    status: "Open Now",
    timing: "08:00-10:00",
    image: require("../../assets/images/blisStudio.png"),
    distance: "1.7km",
    rating: "4.4",
  },
];

const topArtist = [
  {
    id: "1",
    name: "Rahul",
    Image: "",
    Designation: "Hair Stylist",
    experience: 3,
    rating: 4.7,
  },
  {
    id: "2",
    name: "Petar",
    Image: "",
    Designation: "Hair Stylist",
    experience: 3,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Jack",
    Image: "",
    Designation: "Hair Stylist",
    experience: 3,
    rating: 4.7,
  },
];

// ✅ Tab navigation props
type HomeScreenProps = BottomTabScreenProps<TabParamList, "Home">;
// ✅ Root navigation (for navigating to stack screens)
type RootNav = NativeStackNavigationProp<RootStackParamsList>;

const Home = ({ navigation, route }: HomeScreenProps) => {
  const insets = useSafeAreaInsets();
  const rootNavigation = useNavigation<RootNav>();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <View style={styles.helloContainer}>
            <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "bold" }}>
              Hello, Jason
            </Text>
            <Icons
              name="hand-wave"
              size={20}
              color="#FEB052"
              iconFamily="MaterialDesignIcons"
              style={{ transform: [{ scaleX: -1 }] }}
            />
          </View>
          
          <TouchableOpacity style={styles.headerLocationContainer}>
              <Icons
                name="map-pin"
                size={12}
                color="#fff"
                iconFamily="Feather"
              />
              <Text style={{ color: Colors.text3, fontSize: 12 }}> A25, Noida sector 63</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerrightContainer}>
          <TouchableOpacity>
            <Icons
              name="notifications-outline"
              size={24}
              color="#ffffff"
              iconFamily="Ionicons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileImageContainer}
            onPressIn={()=> navigation.navigate('Profile')}
          >
            <Image
              style={styles.profileImage}
              source={require("../../assets/images/mypic.jpeg")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* searchbox */}
      <TouchableOpacity style={styles.searchBox}>
        <Icons name="search" size={20} color="#ffffff" iconFamily="Ionicons" />
        <Text style={{color: Colors.text3}}>search here for services (brows, lips)</Text>
        <TouchableOpacity>
          <Image style={{width: hs(15), height: vs(10)}}
          source={require('../../assets/icons/sort.png')}/>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/images/image.png")}
          imageStyle={{ borderRadius: ms(10) }}
        >
          <View>
            <Text style={[styles.sectionText1, {fontWeight: '800'}]}>Morning Special</Text>
            <Text
              style={{ color: Colors.text, fontSize: 30, fontWeight: "bold" }}
            >
              Get 20% off
            </Text>
            <Text style={{ color: Colors.text }}>
              on all haircuts between 09-10 AM
            </Text>
            <TouchableOpacity style={styles.promoCardBtn}>
              <Text style={{fontSize: fs(10), fontWeight: '500'}}>Book Now </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* beautyServices */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText1}>Beauty Services Near You</Text>
          <TouchableOpacity>
            <Text style={styles.sectionText2}> See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={beautyServices}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.beautyServisesCard}>
                <View style={styles.serviceCardBkImage}>
                  <ImageBackground
                    imageStyle={{ width: hs(137), height: vs(100) }}
                    source={item.image}
                  >
                    <View style={styles.serviceRating}>
                      <Icons
                        name="star"
                        size={12}
                        iconFamily="Ionicons"
                        color="#FEB052"
                      />
                      <Text style={{ color: Colors.text, fontSize: fs(10) }}>{item.rating}</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: Colors.text2, fontSize: 10 }}>
                    {item.status}
                  </Text>
                  <Text style={{ color: "#c9c9c9", fontSize: 10 }}>
                    {" "}
                    - {item.timing}
                  </Text>
                </View>
                <Text style={{ color: Colors.text, fontWeight: '500' }}>{item.title}</Text>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Image
                    source={require("../../assets/icons/tabler_location.png")}
                  />
                  <Text style={{ color: Colors.text, fontSize: 10 }}>
                    {item.distance}
                  </Text>
                </TouchableOpacity>
                <View style={styles.serviceCardBottom}>
                  <TouchableOpacity style={styles.heartBox}>
                    <Icons
                      name="heart-outline"
                      size={20}
                      color="#ffffff"
                      iconFamily="Ionicons"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.serviceCardButton}
                    onPress={() => rootNavigation.navigate("SaloonDetails")}
                  >
                    <Text style={styles.buttonText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />

        {/* LatestVisit */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText1}>Latest Visits</Text>
          <TouchableOpacity>
            <Text style={styles.sectionText2}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.latestVisitsCard}>
          <Image source={require("../../assets/images/richard.png")} />
          <View>
            <Text style={styles.sectionText1}>RICHARD ANDERSON</Text>
            <View style={{ flexDirection: "row", gap: hs(5),  alignItems: 'center' }}>
              <Icons
                name="star"
                size={RFValue(10)}
                iconFamily="Ionicons"
                color="#FEB052"
              />
              <Text style={{ color: Colors.text, fontSize: fs(10) }}>4.6</Text>
              <Icons iconFamily="Octicons" name="dot-fill" size={10} color="#fff"/>
              <Text style={{ color: Colors.text3, fontSize: fs(10) }}>112 reviews</Text>
            </View>
          </View>
        </View>

        {/* topArtist */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText1}>Top Artist</Text>
          <TouchableOpacity>
            <Text style={styles.sectionText2}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={topArtist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.topArtistCard}>
                <View style={styles.artistImageContainer}></View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={[styles.text, { fontSize: fs(10) }]}>
                  {item.Designation}
                </Text>
                <View style={{ flexDirection: "row", gap: ms(40) }}>
                  <Text style={[styles.text, { fontSize: 10 }]}>
                    {item.experience} years exp
                  </Text>
                  <View style={{flexDirection: 'row', gap: hs(2), alignItems: 'center'}}>
                    <Text style={[styles.text, { fontSize: 10 }]}>
                     {item.rating}
                  </Text>
                  <Icons
                      name="star"
                      size={10}
                      iconFamily="Ionicons"
                      color="#FEB052"
                    />
                  </View>
                </View>
                <View style={styles.artistBottom}>
                  <TouchableOpacity style={styles.artistButton1}>
                    <Text  style={styles.buttonText} >Book Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.artistButton2}>
                    <Icons
                      name="arrow-right"
                      size={20}
                      color="#000"
                      iconFamily="MaterialDesignIcons"
                      style={{ transform: [{ rotate: "-45deg" }] }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0D1117',
    padding: hs(5),
  },
  text:{
    color: Colors.text,
    fontWeight: '600',
  },
  headerContainer:{
    width: hs(344),
    height: vs(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ms(5)
  },
  headerLeftContainer:{
   alignItems: 'flex-start',
   
  },
  helloContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: hs(5)
  },
  headerLocationContainer:{
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: hs(5),
  marginTop: vs(5)
  },
  headerrightContainer:{
  flexDirection: 'row',
  alignItems: 'center',
  gap: hs(10)
  },
  profileImageContainer:{
    height: hs(35),
    width: hs(35),
    borderRadius: ms(35),
    resizeMode: 'contain',
    marginRight: hs(10)
  },
  profileImage:{
    height: hs(35),
    width: hs(35),
    borderRadius: ms(35),
  },
  searchBox:{
    width: hs(344),
    height: vs(38),
    flexDirection: 'row',
    backgroundColor: '#1B1B25',
    borderWidth: 1,
    borderRadius: ms(50),
    borderColor: '#363943',
    marginVertical: vs(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hs(10)
  },
  backgroundImage: {
    width: hs(345),
    height: vs(127),
    padding: ms(10),
    resizeMode: 'contain'
  },
  promoCardBtn:{
    backgroundColor: '#ffffff',
    width: hs(80),
    height: vs(27),
    borderRadius: ms(7),
    alignItems: 'center',
    justifyContent:'center',
    marginTop: vs(10)
  },
  sectionContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: vs(10),
    marginBottom: vs(5)
  },
  sectionText1:{
    color: Colors.text,
    fontSize: 17,
    fontWeight: 'semibold'
  },
  sectionText2:{
    color: Colors.text2
  },
  beautyServisesCard:{
    width: hs(150),
    height: vs(200),
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#363943',
    marginRight: ms(10),
    borderRadius: ms(10),
    padding: ms(5),
    rowGap: vs(4)
  },
  serviceCardBkImage:{
    width: hs(130), 
    height: vs(100),
    borderRadius: ms(10)
  },
  serviceRating:{
    flexDirection: 'row', 
    alignItems: 'center',
    gap: hs(3), 
    padding: ms(3),
    width: hs(46), height: vs(18), 
    backgroundColor: '#473E38',
    borderRadius: 5, 
    margin: 10,
    justifyContent: 'center'
  },
  serviceCardBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: vs(5)
  },
  heartBox:{
    width: hs(30),
    height: vs(25),
    backgroundColor:'#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(5)
  },
  serviceCardButton:{
    width: hs(100),
    height: vs(25),
    backgroundColor: Colors.primary,
    borderRadius: ms(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: Colors.text ,
    fontWeight: '600'
  },
  latestVisitsCard:{
    backgroundColor: '#111111',
    width: hs(340),
    height: vs(50),
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#363943',
    flexDirection: 'row',
    alignItems: 'center',
    padding: ms(5),
    gap: ms(10)
  },
  topArtistCard:{
    width: hs(120),
    height: vs(130),
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#363943',
    marginRight: hs(10),
    alignItems: 'center',
    padding: ms(5),
    backgroundColor: '#111111'
  },
  artistImageContainer:{
    width: hs(50),
    height: hs(50),
    borderRadius: (50),
    backgroundColor: '#ffffff'
  },
  artistBottom:{
    flexDirection: 'row',
    gap: ms(5),
    marginVertical: vs(10),
    alignItems: 'center'
   
  },
  artistButton1:{
   width: hs(80),
   height: vs(25),
   backgroundColor: Colors.primary,
   borderRadius: ms(7),
   alignItems: 'center',
   justifyContent: 'center'
  },
  artistButton2:{
    width: hs(25),
    height: hs(25),
    backgroundColor: '#fff',
    borderRadius: ms(5),
    alignItems: 'center',
    justifyContent: 'center'
  }
})