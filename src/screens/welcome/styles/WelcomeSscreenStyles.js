import { StyleSheet } from "react-native"
import { colorPallete, dimensions } from '../../../utils/constants'
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    customButton: {
        width: dimensions.width * 0.88,
        height: 60,
        backgroundColor: colorPallete.darkColor,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontFamily: 'poppinsSemiBold',
        fontSize: 15
    },
    // asGuestTitle: {
    //     textDecorationLine: 'underline',
    //     fontFamily: 'poppinsSemiBold',
    //     color: customColors.primaryColor,
    //     marginTop: 46,
    //     marginBottom: Constants.statusBarHeight
    // },
    appTitle: {
        marginBottom: 43,
        fontSize: 26,
        fontFamily: 'poppinsBold'
    }
})