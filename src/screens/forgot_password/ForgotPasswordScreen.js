import { Text, View } from 'react-native'
import CustomBackButton from '../../components/CustomBackButton'
import { dimensions, dismissKeyBoard, Routes, useCustomNavigation } from '../../utils/constants'
import { loginStyles } from '../login/styles/LoginStyles'
import { forgotPasswordStyles } from './styles/ForgotPasswordStyles'
import CustomTextField from '../../components/TextField'
import CustomAuthButton from '../../components/CustomAuthButton'
import CustomRichText from '../../components/RichText'
import { Formik } from 'formik';
import * as yup from 'yup';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'

const forgotPasswordValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email.').required(),
});

const ForgotPasswordScreen = () => {
    const navigation = useCustomNavigation();
    return (
        <Formik
            validationSchema={forgotPasswordValidationSchema}
            initialValues={{ email: '' }}
            validateOnMount
            validateOnChange
            onSubmit={(values) => {
                navigation.replace(Routes.OtpScreen, { email: values.email });
            }}
        >
            {
                ({ values,
                    handleBlur,
                    handleChange,
                    touched,
                    errors,
                    setErrors,
                    isValid,
                    handleSubmit,
                }) => (
                    <View style={loginStyles.bg} onTouchStart={dismissKeyBoard}>
                        <CustomBackButton onPressed={() => navigation.goBack()} />
                        <Text style={loginStyles.WelcomeMessage}>Forgot Password?</Text>
                        <Text style={forgotPasswordStyles.subtitle}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                        <CustomTextField
                            value={values.email}
                            onBlur={handleBlur('email')}
                            customStyle={{ marginTop: 32 }}
                            placeholder='Enter your email'
                            onChanged={handleChange('email')}
                        />
                        {
                            (errors.email && touched.email) &&
                            <Animated.Text entering={FadeInDown} exiting={FadeOutDown} style={loginStyles.errorMessage}>{errors.email}</Animated.Text>
                        }
                        <CustomAuthButton
                            customButtonStyle={{ marginTop: 38 }}
                            title='Send Code'
                            onPressed={handleSubmit} />
                        <CustomRichText
                            style={{ marginTop: dimensions.height * 0.45 }}
                            onPressed={() => navigation.goBack()}
                            firstText='Remember Password?'
                            secondText='Login Now'
                        />
                    </View>
                )
            }
        </Formik>
    )
}

export default ForgotPasswordScreen