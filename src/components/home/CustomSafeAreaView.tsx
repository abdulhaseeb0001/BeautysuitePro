import React, { FC, ReactNode } from 'react';
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomSafeAreaViewProps {
  children: ReactNode,
  style?: ViewStyle,
}


const CustomSafeAreaView: FC<CustomSafeAreaViewProps> = ({ children, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, style]}>
        <View style={[styles.container, style, { paddingTop: Platform.OS === 'android' ? insets.top : 0, paddingBottom: Platform.OS === 'android' ? insets.bottom : 0}]}>
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
});
