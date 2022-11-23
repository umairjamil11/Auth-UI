import { ScrollView, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from '../login/styles/LoginStyles'
import CustomBackButton from '../../components/CustomBackButton'
import TextField from '../../components/TextField'
import { colorPallete, dimensions, dismissKeyBoard, Routes, useCustomNavigation } from '../../utils/constants'
import CustomAuthButton from '../../components/CustomAuthButton'
import CustomRichText from '../../components/RichText'
import { EyeButton } from '../login/LoginScreen'
import { Formik } from 'formik';
import * as yup from 'yup';
import Constants from 'expo-constants'


const signupValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email.').required('Email is required to sign in.'),
  username: yup.string('Username is required').max(8, (({ max }) => `Username should not exceed ${max} characters.`)).required(),
  password: yup.string()
    .min(6, ({ min }) => `Password must be ${min} characters long.`)
    .required('Password is required.'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(6, ({ min }) => `Password must be ${min} characters long.`)
    .required('Password is required.'),

})

const SignUpScreen = () => {
  const [passwordHidden, setpasswordHidden] = useState(true);
  const [confirmPasswordHidden, setconfirmPasswordHidden] = useState(true);
  const navigation = useCustomNavigation();

  console.log('screen height And Width:', dimensions.height, dimensions.width);

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={signupValidationSchema}
      validateOnMount={true}
      onSubmit={values => {

      }} >
      {
        ({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
          <ScrollView style={{ flex: 1, backgroundColor: colorPallete.whiteColor }}>
            <View style={loginStyles.bg} onTouchStart={dismissKeyBoard}>
              <CustomBackButton onPressed={() => navigation.goBack()} />
              <Text style={loginStyles.WelcomeMessage}>Hello, Register to get started!</Text>
              <TextField
                customStyle={{ marginTop: 32 }}
                keyboardType='email-address'
                onChanged={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Enter your email"
              />
              {
                (errors.email && touched.email) &&
                <Text style={loginStyles.errorMessage}>{errors.email}</Text>
              }
              <TextField
                onChanged={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Enter your username"
                customStyle={{ marginTop: 12 }}
              />
              {
                (errors.username && touched.username) &&
                <Text style={loginStyles.errorMessage}>{errors.username}</Text>
              }
              <TextField
                obsecureText={passwordHidden}
                onChanged={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Enter your password"
                customStyle={{ marginTop: 12 }}
                suffix={
                  <EyeButton
                    icon={passwordHidden ? 'eye' : 'eye-slash'}
                    onPress={() => setpasswordHidden(!passwordHidden)}
                  />
                }
              />
              {
                (errors.password && touched.password) &&
                <Text style={loginStyles.errorMessage}>{errors.password}</Text>
              }
              <TextField
                obsecureText={confirmPasswordHidden}
                onChanged={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                placeholder="Confirm your password"
                customStyle={{ marginTop: 12 }}
                suffix={
                  <EyeButton
                    icon={confirmPasswordHidden ? 'eye' : 'eye-slash'}
                    onPress={() => setconfirmPasswordHidden(!confirmPasswordHidden)}
                  />
                }
              />
              {
                (errors.confirmPassword && touched.confirmPassword) &&
                <Text style={loginStyles.errorMessage}>{errors.confirmPassword}</Text>
              }
              <CustomAuthButton
                title='Register'
                customButtonStyle={{ marginTop: 30 }}
                onPressed={handleSubmit}
              />
              {/* <BottomDivider title='Or Register With' />
      <SocialAuthButtons
        onGooglePressed={() => { }}
        onFBPressed={() => { }}
        onApplePressed={() => { }}
      /> */}
              <CustomRichText
                onPressed={() => navigation.replace(Routes.LoginScreen)}
                firstText="Already have an account?"
                secondText='Login Now'
                style={{ marginTop: dimensions.height * 0.27, marginBottom: Constants.statusBarHeight }} />
            </View>
          </ScrollView>
        )}
    </Formik>
  )
}

export default SignUpScreen