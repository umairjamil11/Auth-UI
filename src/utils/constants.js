import { Dimensions, Keyboard } from "react-native";
import * as Constants from "expo-constants"
import { useNavigation } from "@react-navigation/native";


export const dimensions = Dimensions.get('screen');
export const ASPECT_RATIO = dimensions.width / dimensions.height;
export const LATITUDE_DELTA = 0.12;
export const LONGITUDE_DELTA = (LATITUDE_DELTA * ASPECT_RATIO);
export const statusBarHeight = Constants.default.statusBarHeight;
export const dismissKeyBoard = () => Keyboard.dismiss();
export const useCustomNavigation = () => {
    const navigation = useNavigation();
    return navigation;
}

export const colorPallete = {
    primaryColor: 'rgb(102,72,206)',
    borderColor: '#E8ECF4',
    grayColor: '#8391A1',
    darkGrayColor: "#6A707C",
    whiteColor: 'white',
    darkColor: '#1E232C',
    textFieldBgColor: '#F7F8F9',
    redColor: '#ff1100'
}

export const Routes = {
    WelcomeScreen: '/welcome_screen',
    SignUpScreen: '/signup_screen',
    LoginScreen: '/login-screen',
    ForgotPasswordScreen: '/forgot_password_screen',
    OtpScreen: '/otp_screen',
    ChangePasswordScreen: '/change_password_screen',
    HomeScreen: '/home_screen'
}