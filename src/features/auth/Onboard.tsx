import React, { FC, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
  ListRenderItem,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../navigators/Types";

const { width, height } = Dimensions.get("window");

type OnboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  "Onboard"
>;

type Props = {
  navigation: OnboardScreenNavigationProp;
};

type Slide = {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: any;
};

const slides: Slide[] = [
  {
    id: "1",
    title: "Book in Seconds, Anytime, Anywhere",
    subtitle:
      "Easily schedule appointments, pay deposits, and get instant confirmations—right from your phone.",
    backgroundImage: require("../../assets/images/onboarding2.png"),
  },
  {
    id: "2",
    title: "Track Your Healing.   Stay informed.",
    subtitle:
      "Get aftercare instructions, upload healing photos, and monitor your progress—all in one place.",
    backgroundImage: require("../../assets/images/onboarding3.png"),
  },
];

const Onboard: FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList<Slide> | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace("Login");
    }
  };
  const handleSkip = () => {
    navigation.replace("Login");
  };

const renderItem: ListRenderItem<Slide> = ({ item }) => {
  return (
    <View style={[]}>
      <ImageBackground
      source={item.backgroundImage}
      style={[styles.slide, { width, height}]}
      resizeMode="cover"
    >
      {/* Optional dark overlay */}
      <View style={styles.overlay} />

      <View style={styles.contentContainer}>
        {/* Title with highlighted word */}
        <Text style={styles.title}>
          {item.title.split(" ").map((word, index) => (
            <Text
              key={index}
              style={[
                styles.title,
                word === "Book" && { color: "#F2BA0C" }, // highlight Book
                word === "Healing." && { color: "#F2BA0C" }, // highlight Healing
              ]}
            >
              {word}{" "}
            </Text>
          ))}
        </Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </ImageBackground>
    </View>
  );
};


  return (
    <View style={[styles.container]}>
      {/* Skip button */}
      <TouchableOpacity
        style={[styles.skipTop, { top: insets.top + 10 }]}
        onPress={handleSkip}
      >
        <Text style={styles.skipTopText}>Skip</Text>
      </TouchableOpacity>

      {/* Slides */}
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />

      {/* Bottom row (dots left + circular arrow right) */}
      <View style={[styles.bottomRow, {paddingBottom: insets.bottom}]}>
        {/* Dots */}
        <View style={styles.dotsRow}>
          {slides.map((_, i) => {
            const isActive = i === currentIndex;
            return (
              <View
                key={i}
                style={[styles.dot, isActive ? styles.activeDot : styles.inactiveDot]}
              />
            );
          })}
        </View>

        {/* Arrow Button */}
        <TouchableOpacity style={styles.circularButton} onPress={handleNext}>
          <Image
            style={styles.arrow}
            source={require("../../assets/icons/rightChevron.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  slide: {
    flex: 1,
    justifyContent: "flex-start",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  contentContainer: {
    flex: 0.87,
    justifyContent: 'flex-end',
    width: 348,
  },
  title: {
    width: 348,
    fontSize: 32,
    color: "#ffffff",
    paddingHorizontal:30,
    fontFamily: 'Beauty nigella'
    
  },
  subtitle: {
    fontSize: 14,
    color: "#ffffff",
    paddingLeft: 30,
    marginTop: 10,
    
  },
  skipTop: {
    position: "absolute",
    right: 16,
    zIndex: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  skipTopText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomRow: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 22,
    backgroundColor: "#F39F01",
  },
  inactiveDot: {
    width: 22,
    backgroundColor: "#F1F2F4",
  },
  circularButton: {
    backgroundColor: "#F2BA0C",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    height: 16,
    width: 9,
    tintColor: "#fff",
  },
});
