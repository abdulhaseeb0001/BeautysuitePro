import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format time
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 -> 12
      const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;

      // Format date
      const day = now.getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;

      setCurrentDateTime(`${formattedTime}  ${formattedDate}`);
    };

    updateDateTime(); // initial call
    const interval = setInterval(updateDateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentDateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
  text: {
    fontSize: 14,
    color: "#ffffff"
  },
});

export default CurrentDateTime;
