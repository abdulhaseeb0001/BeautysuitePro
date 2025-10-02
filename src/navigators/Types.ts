// import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
// import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
  Splash: undefined;
  Onboard: undefined;
  Login: undefined;
  EmailLogin: undefined;
  Signup: undefined;
  LoginOtp: {
    selectedMobile: string;
    selectedCode: string;
  };
  ForgotPassword: undefined;
  ResetCode: {
    email: string;
  };
  ResetPassword: undefined;
  BottomTab: { screen?: keyof TabParamList } | undefined;
  PrivacyPolicy: undefined;
  UserAgreement: undefined;
  UpdateProfile: undefined;
  SaloonDetails: undefined;
  Services: undefined;
  BookAppointment: undefined;
  Payment: undefined;
  BookingSuccess: undefined;
  CancelAppointment: undefined;
  ConsentForm: undefined;
  ConsentFormModal: undefined;
  JoinWaitlist: undefined;
};

// ✅ Bottom Tab routes
export type TabParamList = {
  Home: undefined;
  "My Bookings": undefined;
  "My Favourite": undefined;
  Messages: undefined;
  Profile: undefined;
};


