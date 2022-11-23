import { View, Text } from 'react-native'
import CustomBackButton from '../../../components/CustomBackButton'
import { dimensions, dismissKeyBoard, Routes, useCustomNavigation } from '../../../utils/constants'
import { loginStyles } from '../../login/styles/LoginStyles'
import CustomCodeInputTextField from '../components/CodeInputTextField'
import { forgotPasswordStyles } from '../styles/ForgotPasswordStyles'
import CustomAuthButton from '../../../components/CustomAuthButton'
import CustomRichText from '../../../components/RichText'


const OtpScreen = () => {

    const navigation = useCustomNavigation();
    return (
        <View style={loginStyles.bg} onTouchStart={dismissKeyBoard}>
            <CustomBackButton onPressed={() => navigation.goBack()} />
            <Text style={loginStyles.WelcomeMessage}>OTP Verification</Text>
            <Text style={forgotPasswordStyles.subtitle}>Enter the verification code we just sent to your email address.</Text>
            <CustomCodeInputTextField />
            <CustomAuthButton
                title='Verify'
                customButtonStyle={{ marginTop: 38 }}
                onPressed={() => {
                    navigation.replace(Routes.ChangePasswordScreen)
                }}
            />
            <CustomRichText
                style={{ marginTop: 32 }}
                onPressed={() => navigation.replace(Routes.ForgotPasswordScreen)}
                firstText='Wrong email?'
                secondText='Change it here!'
            />
        </View>
    )
}

export default OtpScreen