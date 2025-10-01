

import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React, {FC, useState} from 'react'
import CustomHeader from '../../components/home/CustomHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icons from '../../components/home/Icons';
import {hs, vs, ms, fs} from '../../utils/Scaling'
import { TabParamList } from '../../navigators/Types';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


type MessagesScreenProps = BottomTabScreenProps< TabParamList, "Messages">


const Messages: FC<MessagesScreenProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [type, setType] = useState('Saloon');
  
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      
       <CustomHeader title='Messages' backIcon={true} gap = {10}  backgroundColor= '#1D1F22' onPress={() =>navigation.goBack() } />

      {/* subContainer */}
      <View style={styles.subContainer}>
  
       

      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1D1F22' 
  },
  subContainer:{
   flex: 1,
   backgroundColor: '#0D1117',
  },  
  tex1:{

  },
  text2:{
   color: '#B9B9CB',
   fontSize: fs(14)
  },

})