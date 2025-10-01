import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Icons from "../../components/home/Icons";
import {hs, vs, fs, ms} from '../../utils/Scaling'

export default function WeeklyCalendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);

  // Generate 7 days of the current week
  const getWeekDates = (date: Date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay()); // start of week (Sunday)
    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  };

  const weekDates = getWeekDates(currentDate);

  const handlePrevWeek = () => {
    const prev = new Date(currentDate);
    prev.setDate(currentDate.getDate() - 7);
    setCurrentDate(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(currentDate);
    next.setDate(currentDate.getDate() + 7);
    setCurrentDate(next);
  };

  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.container}>
      {/* Header with arrows */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevWeek}>
          <Icons name="chevron-back" size={22} color="#fff"  iconFamily="Ionicons"/>
        </TouchableOpacity>
        <Text style={styles.monthText}>{monthLabel}</Text>
        <TouchableOpacity onPress={handleNextWeek}>
          <Icons name="chevron-forward" size={22} color="#fff"  iconFamily="Ionicons"/>
        </TouchableOpacity>
      </View>

      {/* Days of week */}
      <View>
        <FlatList
        horizontal
        data={weekDates}
        keyExtractor={(item) => item.toDateString()}
        contentContainerStyle={styles.weekRow}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelected =
            item.toDateString() === selectedDate.toDateString();
          return (
            <TouchableOpacity
              style={[
                styles.dayContainer,
                isSelected && styles.selectedDayContainer,
              ]}
              onPress={() => setSelectedDate(item)}
            >
              <Text style={[styles.dayLabel, isSelected && styles.selectedText]}>
                {item.toLocaleDateString("en-US", { weekday: "short" })}
              </Text>
              <Text style={[styles.dateLabel, isSelected && styles.selectedText]}>
                {item.getDate()}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      </View>

      {/* <Text style={styles.selectedInfo}>
        Selected: {selectedDate.toDateString()}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "#111111", 
    padding: vs(10) ,
    borderRadius: ms(20),
    borderColor: '#2a2a2a',
    borderWidth: 1,
    marginVertical: vs(10)
    
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  monthText: { color: "#fff", fontSize: fs(16), fontWeight: "600" },
  weekRow: { paddingHorizontal: 10 },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#555",
    width: hs(45), 
    height: vs(62)
  },
  selectedDayContainer: {
    backgroundColor: "#5c4a33ff",
    borderColor: "#F39E01",
  },
  dayLabel: { color: "#DED9D9", fontSize: fs(9), fontWeight: 'bold' },
  dateLabel: { color: "#fff", fontSize: 16, fontWeight: "500" },
  selectedText: { color: "#fff", fontWeight: "bold" },
  selectedInfo: { marginTop: 20, color: "#fff", textAlign: "center" },
});
