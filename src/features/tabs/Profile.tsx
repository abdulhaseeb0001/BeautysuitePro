import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Children, FC } from 'react'
import CustomHeader from '../../components/home/CustomHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { hs, vs, ms, fs } from '../../utils/Scaling'
import { Colors } from '../../utils/Constants'
import Icons from '../../components/home/Icons';
import { RootStackParamsList, TabParamList } from '../../navigators/Types';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


// ✅ Props from Tab Navigator
type ProfileScreenProps = BottomTabScreenProps<TabParamList, "Profile">;

// ✅ Access to Root Stack navigation for cross-stack navigation
type RootNav = NativeStackNavigationProp<RootStackParamsList>;

const Profile:FC<ProfileScreenProps> = ({route}) => {
  const isnsets = useSafeAreaInsets();
  const navigation = useNavigation<RootNav>();
  const { name, email } = useSelector((state: RootState) => state.auth);

  return (
    <View style={[styles.container, { paddingTop: isnsets.top }]}>
      <CustomHeader title='Profile' backIcon={true} backgroundColor='#1D1F22' onPress={()=> navigation.goBack()}/>
      <View style={styles.subContainer}>

        <View style={styles.profileHeader}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/icons/Profile.png')} />
          </View>
          <View>
            <Text style={{ color: '#ffff' }}>Hi, I am {name || "Guest"}</Text>
            <Text style={{ color: '#ffff' }}>{email || "No email set"}</Text>
          </View>
        </View>


        <View style={styles.personalInformation}>
          <Text style={styles.text1}>Personal Information</Text>
          <TouchableOpacity style={styles.informationRows}
            onPress={() => navigation.navigate('UpdateProfile')}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="FontAwesome"
                name="user-o"
                size={fs(16)}
                color={Colors.primary}
              />
              <Text style={styles.text2}>Personal Information</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="Feather"
                name="calendar"
                size={fs(16)}
                color={Colors.primary}
              />
              <Text style={styles.text2}>My Bookings</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="Ionicons"
                name="heart-outline"
                size={fs(16)}
                color={Colors.primary}
              />
              <Text style={styles.text2}>My Favourites</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="Ionicons"
                name="notifications-outline"
                size={fs(16)}
                color={Colors.primary}
              />
              <Text style={styles.text2}>Notifications</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="MaterialIcons"
                name="hourglass-empty"
                size={fs(16)}
                color={Colors.primary}
              />
              <Text style={styles.text2}>Waitlist</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="FontAwesome"
                name="credit-card"
                size={fs(16)}
                color={Colors.primary}
              />
              <Text style={styles.text2}>Payment Methods</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>

        </View>

        <View>
          <Text style={styles.text1}>Support & Information</Text>
          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="Ionicons"
                name="shield-checkmark"
                size={20}
                color={Colors.primary}
              />
              <Text style={styles.text2}>Privacy Policy</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.informationRows}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Icons
                iconFamily="Ionicons"
                name="document-text-outline"
                size={20}
                color={Colors.primary}
              />
              <Text style={styles.text2}>Trems & Conditions</Text>
            </View>
            <Icons
              name="chevron-right"
              size={fs(20)}
              iconFamily="MaterialDesignIcons"
              color={Colors.white}
              style={{ marginTop: vs(2) }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logout}>
          <Text style={[styles.text2, { color: '#F75656' }]}>Logout</Text>
        </TouchableOpacity>



      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1F22",
    flex: 1,
  },
  subContainer: {
    backgroundColor: '#020202',
    flex: 1,
    padding: ms(10)
  },
  text1: {
    color: '#ffffff',
    fontSize: fs(17),
    fontWeight: 'semibold'
  },
  text2: {
    color: '#ffffff',
    fontSize: fs(14),
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: ms(10),
    borderBottomWidth: vs(2),
    borderBottomColor: '#363943',
    gap: hs(10)
  },
  imageContainer: {
    width: hs(40),
    height: hs(40),
    borderRadius: ms(50),
    backgroundColor: '#f39f39',
    alignItems: 'center',
    justifyContent: 'center'
  },
  personalInformation: {
    borderBottomWidth: vs(2),
    borderBottomColor: '#363943',
    marginVertical: vs(10)
  },
  informationRows: {
    flexDirection: 'row',
    height: vs(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: ms(5)
  },
  logout: {
    marginTop: vs(10)
  }
})