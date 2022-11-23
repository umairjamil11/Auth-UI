import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from '../../src/screens/welcome/WelcomeScreen'
import SignUpScreen from '../../src/screens/signup/SignUpScreen'
import ForgotPasswordScreen from '../../src/screens/forgot_password/ForgotPasswordScreen';
import LoginScreen from '../../src/screens/login/LoginScreen'
import { Routes } from '../../src/utils/constants';
import OtpScreen from '../../src/screens/forgot_password/children/OtpScreen';
import ChangePasswordScreen from '../../src/screens/forgot_password/children/ChangePasswordScreen';
import { useEffect, useState } from "react";
import HomeScreen from '../screens/home/HomeScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [InitialRoute, setInitialRoute] = useState('')


    return (
        <Stack.Navigator
            initialRouteName={InitialRoute}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.WelcomeScreen} component={WelcomeScreen} />
            <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
            <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
            <Stack.Screen name={Routes.ForgotPasswordScreen} component={ForgotPasswordScreen} />
            <Stack.Screen name={Routes.OtpScreen} component={OtpScreen} />
            <Stack.Screen name={Routes.ChangePasswordScreen} component={ChangePasswordScreen} />
            <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack