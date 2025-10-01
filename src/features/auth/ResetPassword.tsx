
import React, { FC, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../navigators/Navigator';
import CustomHeader from '../../components/home/CustomHeader';
import { hs, vs, fs } from '../../utils/Scaling';
import CustomButton from '../../components/home/CustomButton';
import CustomInput from '../../components/home/CustomInput';

type ResetPasswordScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamsList,
    'ResetPassword'
>;

type Props = {
    navigation: ResetPasswordScreenNavigationProp;
    route: any;
};

const ResetPassword: FC<Props> = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(false);
    const [showeye, setShowEye] = useState(true);
    const [showeye1, setShowEye1] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

  const handleResetPassword = () => {
    if (!password.trim() || !confirmPass.trim()) {
      Alert.alert('Validation Error', 'Please enter both password fields.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPass) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    // ✅ If validation passes
    Alert.alert('Success', 'Password has been reset successfully!');
    navigation.navigate('EmailLogin');
  };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <CustomHeader
                backIcon={true}
                title='Forgot Password'
                gap={100}
                onPress={() => navigation.goBack()}
                borderBottomWidth={1}
                borderBottomColor='#686C7B'
            />

            <View style={styles.subContainer}>
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>Reset Password</Text>
                    <Text style={styles.subtitle}>Enter your new password twice below to reset a new password.</Text>
                </View>


                <View style={styles.middle}>
                    <Text style={styles.text}>enter new password</Text>
                    <CustomInput
                        placeholder='Enter new password'
                        left={false}
                        right={false}
                        marginB={10}
                        marginT={5}
                        secure={showeye}
                        secureIcon={true}
                        onPressVisible={() => setShowEye(!showeye)}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.text}>Re-enter new password</Text>
                    <CustomInput
                        placeholder='Re-enter new password'
                        left={false}
                        right={false}
                        marginB={10}
                        marginT={5}
                        secure={showeye1}
                        secureIcon={true}
                        onPressVisible={() => setShowEye1(!showeye1)}
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                    />
                </View>


                <CustomButton
                    title='Set New Password'
                    disabled={false}
                    loading={false}
                    btnHeight={48}
                    onPress={handleResetPassword}
                />
            </View>

        </View>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D1117',
        flex: 1,
    },
    subContainer: {
        alignItems: 'center'
    },
    titlesContainer: {
        width: hs(354),
        height: vs(80),
        marginVertical: vs(20),
        paddingLeft: hs(20),
        paddingRight: hs(60),  
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Beauty nigella',
        fontSize: 28
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Roboto'
    },
    text: {
        color: '#F9F9F9',
        fontSize: 16,
    },
    middle:{
        marginVertical: hs(10)
    }

});
