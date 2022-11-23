import { Text, View, TouchableOpacity } from 'react-native'
import { loginStyles } from './styles/LoginStyles'
import CustomBackButton from '../../components/CustomBackButton'
import CustomAuthButton from '../../components/CustomAuthButton'
import TextField from '../../components/TextField'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { dimensions, dismissKeyBoard, Routes, useCustomNavigation } from '../../utils/constants'
import CustomRichText from '../../components/RichText'
import { useContext, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email.').required('Email is required to sign in.'),
    password: yup.string()
        .min(6, ({ min }) => `Password must be ${min} characters long.`)
        .required('Password is required.')
});


const LoginScreen = () => {
    const [passwordHidden, setpasswordHidden] = useState(true)
    const navigation = useCustomNavigation();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginValidationSchema}
            validateOnMount={true}
            onSubmit={values => { }} >
            {
                ({ resetForm, handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <View style={loginStyles.bg} onTouchStart={dismissKeyBoard}>
                        <CustomBackButton onPressed={() => navigation.goBack()} />
                        <Text style={loginStyles.WelcomeMessage}>Welcome back! Glad{'\n'}to see you, Again!</Text>

                        <TextField
                            keyboardType='email-address'
                            value={values.email}
                            onChanged={handleChange('email')}
                            onBlur={handleBlur('email')}
                            placeholder="Enter your email"
                            customStyle={{ marginTop: 32 }}
                        />
                        {
                            (errors.email && touched.email) &&
                            <Text style={loginStyles.errorMessage}>{errors.email}</Text>

                        }
                        <TextField
                            obsecureText={passwordHidden}
                            value={values.password}
                            onChanged={handleChange('password')}
                            onBlur={handleBlur('password')}
                            placeholder="Enter your password"
                            customStyle={{ marginTop: 16 }}
                            suffix={EyeButton({ icon: !passwordHidden ? 'eye-slash' : 'eye', onPress: () => setpasswordHidden(!passwordHidden) })}
                        />
                        {
                            (errors.password && touched.password) &&
                            <Text style={loginStyles.errorMessage}>{errors.password}</Text>

                        }
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => {
                                navigation.navigate(Routes.ForgotPasswordScreen);
                                resetForm();
                            }}>
                            <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <CustomAuthButton
                            title='Login'
                            customButtonStyle={{ marginTop: 30 }}
                            onPressed={handleSubmit}
                        />
                        <CustomRichText
                            firstText="Don't have an account?"
                            secondText='Create New'
                            onPressed={() => navigation.replace(Routes.SignUpScreen)}
                            style={{ marginTop: dimensions.height * 0.38 }}
                        />
                    </View>
                )}
        </Formik>
    );
}

export const EyeButton = ({ onPress, icon }) => <TouchableOpacity onPress={onPress}>
    <FontAwesome name={icon} style={{ marginRight: 16 }} />
</TouchableOpacity>

export const CustomBorderComponent = () => <View style={loginStyles.border} />

export default LoginScreen
