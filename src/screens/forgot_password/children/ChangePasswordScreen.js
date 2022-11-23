import { View, Text } from 'react-native'
import CustomBackButton from '../../../components/CustomBackButton'
import { loginStyles } from '../../login/styles/LoginStyles'
import { forgotPasswordStyles } from '../styles/ForgotPasswordStyles'
import TextField from '../../../components/TextField'
import CustomAuthButton from '../../../components/CustomAuthButton'
import { dismissKeyBoard, useCustomNavigation } from '../../../utils/constants'
import SuccessMarkIcon from '../../../../assets/images/Successmark.svg'
import { useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

const ChangePasswordScreen = () => {
    const navigation = useCustomNavigation();
    const [passwordChanged, setpasswordChanged] = useState(false)
    const passwordChangedSchema = yup.object().shape({
        password: yup.string()
            .min(6, ({ min }) => `Password must be ${min} characters long.`)
            .required('Password is required.'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .min(6, ({ min }) => `Password must be ${min} characters long.`)
            .required('Password is required.'),
    });

    return <Formik
        validationSchema={passwordChangedSchema}
        validateOnMount
        validateOnChange
        initialValues={{ password: '', confirmPassword: '' }}
        onSubmit={(values) => setpasswordChanged(true)}>
        {
            ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                passwordChanged &&
                <PasswordChangedSuccessComponent />
                || <View style={loginStyles.bg} onTouchStart={dismissKeyBoard}>
                    <CustomBackButton
                        onPressed={() => navigation.goBack()}
                    />
                    <Text style={loginStyles.WelcomeMessage}>Create new password</Text>
                    <Text style={forgotPasswordStyles.subtitle}>Your new password must be unique from those previously used password.</Text>
                    <TextField
                        onChanged={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        customStyle={{ marginTop: 32 }}
                        placeholder='New Password'
                    />
                    {
                        (errors.password && touched.password)
                        && <Text style={loginStyles.errorMessage}>{errors.password}</Text>
                    }
                    <TextField
                        onChanged={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        customStyle={{ marginTop: 15 }}
                        placeholder='Confirm Password'
                    />
                    {
                        (errors.confirmPassword && touched.confirmPassword)
                        && <Text style={loginStyles.errorMessage}>{errors.confirmPassword}</Text>
                    }
                    <CustomAuthButton
                        customButtonStyle={{ marginTop: 38 }}
                        title='Change Password'
                        onPressed={handleSubmit}
                    />
                    {
                        errors.passwordNotMatched && <Text style={loginStyles.errorMessage}>{errors.password}</Text>
                    }
                </View>
            )}
    </Formik>

}

export default ChangePasswordScreen

export const PasswordChangedSuccessComponent = () => {
    const navigattion = useCustomNavigation();
    return <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
        <SuccessMarkIcon style={{ alignSelf: 'center' }} />
        <Text style={[loginStyles.WelcomeMessage, { fontSize: 26 }]}>Password Changed</Text>
        <Text style={[forgotPasswordStyles.subtitle, { textAlign: 'center' }]}>Your password has been changed{'\n'}successfully.</Text>
        <CustomAuthButton
            title='Back to Login'
            customButtonStyle={{ marginTop: 40 }}
            onPressed={() => navigattion.goBack()}
        />
    </View>
}