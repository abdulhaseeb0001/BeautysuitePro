import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../features/tabs/Home";
import MyBooking from "../features/tabs/MyBookings";
import MyFavourite from "../features/tabs/MyFavourite";
import Messages from "../features/tabs/Messages";
import Profile from "../features/tabs/Profile";
import { Colors } from "../utils/Constants";
import { TabParamList } from "./Types";
import { Image } from "react-native";

// ✅ Import all SVG icons
import HomeIcon from "../assets/icons/home4x.png";
import BookingIcon from "../assets/icons/booking4x.png";
import HeartIcon from "../assets/icons/heart4x.png";
import MessageIcon from "../assets/icons/message4x.png";
import ProfileIcon from "../assets/icons/Profile4x.png";

const Tabs = createBottomTabNavigator<TabParamList>();

// ✅ Map routes to their SVG icons
const ICONS: Record<keyof TabParamList, any>= {
  Home: HomeIcon,
  "My Bookings": BookingIcon,
  "My Favourite": HeartIcon,
  Messages: MessageIcon,
  Profile: ProfileIcon,
};

const BottomTab: FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#0E0E0E" },
        tabBarIcon: ({ color, size, focused }) => {
          const Icon = ICONS[route.name as keyof TabParamList ];
          return <Image
          source={Icon}
          style={{
                width: size,
                height: size,
                tintColor: color, // ✅ Apply active/inactive color
                resizeMode: "contain",
              }}
          />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="My Bookings" component={MyBooking} />
      <Tabs.Screen name="My Favourite" component={MyFavourite} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

export default BottomTab;
