import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../screens/welcome/styles/WelcomeSscreenStyles'

const CustomButton = ({
  title,
  onPressed,
  customButtonStyle: style,
  customButtonTitleStyle,
  disabled
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressed}
      activeOpacity={0.3}>
      <View style={[styles.customButton, style]}>
        <Text style={[styles.buttonTitle, customButtonTitleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton