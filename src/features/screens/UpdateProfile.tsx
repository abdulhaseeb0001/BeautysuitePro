import { View, Text } from 'react-native'
import React , {FC} from 'react'
import { RootStackParamsList } from '../../navigators/Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type UpdateProfileProps = NativeStackScreenProps<
  RootStackParamsList, "UpdateProfile"
>



const UpdateProfile: FC<UpdateProfileProps> = ({navigation}) => {
  return (
    <View>
      <Text>UpdateProfile</Text>
    </View>
  )
}

export default UpdateProfile