import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../features/auth/Splash';
import Onboard from '../features/auth/Onboard';
import Login from '../features/auth/Login';
import Signup from '../features/auth/Signup';
import LoginOtp from '../features/auth/LoginOtp';
import EmailLogin from '../features/auth/EmailLogin';
import ForgotPassword from '../features/auth/ForgotPassword'
import { RootStackParamsList } from './Types';
import ResetCode from '../features/auth/ResetCode'
import ResetPassword from '../features/auth/ResetPassword';
import PrivacyPolicy from '../features/screens/PrivacyPolicy';
import UserAgreement from '../features/screens/UserAgreement';
import UpdateProfile from '../features/screens/UpdateProfile';
import BottomTab from './BottomTab';
import SaloonDetails from '../features/screens/SaloonDetails';
import Services from '../features/reusableComponents/Services'
import BookAppointment from '../features/screens/BookAppointment';
import Payment from '../features/screens/Payment';
import BookingSuccess from '../features/screens/BookingSuccess';
import ConsentForm from '../features/screens/ConsentForm'
import CancelAppointment from '../features/screens/CancelAppointment'







const Stack = createNativeStackNavigator<RootStackParamsList>();
 
export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Splash' component={Splash} />
              <Stack.Screen name='Onboard' component={Onboard} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Signup' component={Signup} />
              <Stack.Screen name='LoginOtp' component={LoginOtp} />
              <Stack.Screen name='EmailLogin' component={EmailLogin} />
              <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: false}} />
              <Stack.Screen name='ResetCode' component={ResetCode} options={{headerShown: false}} />
              <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown: false}} />
              <Stack.Screen name='BottomTab' component={BottomTab} />
              <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
              <Stack.Screen name='UserAgreement' component={UserAgreement} />
              <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
              <Stack.Screen name='SaloonDetails' component={SaloonDetails} />
              <Stack.Screen name='Services' component={Services} />
              <Stack.Screen name='BookAppointment' component={BookAppointment} />
              <Stack.Screen name='Payment' component={Payment} />
              <Stack.Screen name='BookingSuccess' component={BookingSuccess} />
              <Stack.Screen name='ConsentForm' component={ConsentForm} />
              <Stack.Screen name='CancelAppointment' component={CancelAppointment} />
              
            </Stack.Navigator>
        </NavigationContainer>
    )
};