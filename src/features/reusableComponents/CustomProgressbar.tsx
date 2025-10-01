import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "../../components/home/Icons";

interface CustomProgressbarProps {
  steps: string[];
  currentStep: number; // index of current step
}

const CustomProgressbar: React.FC<CustomProgressbarProps> = ({ steps, currentStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={index}>
            {/* Circle */}
            <View style={styles.stepItem}>
              <View style={[styles.circle, isActive && styles.activeCircle]}>
                {isActive ? (
                  <Icons name="checkmark" size={12} color="#ffffff" iconFamily="Ionicons" />
                ) : (
                  <View
                    style={[
                      styles.dot,
                      isCompleted && { backgroundColor: "#FFA500" }, // only change dot color when completed
                    ]}
                  />
                )}
              </View>
              <Text
                style={[
                  styles.label,
                  isCompleted && styles.labelCompleted,
                  isActive && styles.labelActive,
                ]}
              >
                {step}
              </Text>
            </View>

            {/* Line */}
            {index < steps.length - 1 && (
              <View
                style={[styles.line, (isCompleted || isActive) && styles.activeLine]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    alignSelf: 'center',
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor:'red',
    justifyContent: 'space-between'
  },
  stepItem: {
    alignItems: "center",
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: "#555",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: "#FFA500",
    borderRadius: 9,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#999",
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#555",
    marginHorizontal: 2,
    marginBottom: 20 
  },
  activeLine: {
    backgroundColor: "#FFA500",
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    color: "#ccc",
  },
  labelCompleted: {
    color: "#FFA500",
    fontWeight: "600",
  },
  labelActive: {
    color: "#f39f39",
    fontWeight: "600",
  },
});

export default CustomProgressbar;
