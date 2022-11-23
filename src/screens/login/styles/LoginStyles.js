import { StyleSheet } from "react-native"
import { colorPallete, dimensions, statusBarHeight } from '../../../utils/constants'

export const loginStyles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: statusBarHeight + 12,
        paddingHorizontal: 22,
        backgroundColor: 'white'
    },
    backButton: {
        width: 40,
        height: 40,
        borderColor: colorPallete.borderColor,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    WelcomeMessage: {
        fontSize: 30,
        marginTop: 28,
        fontFamily: 'poppinsSemiBold'
    },
    forgotPassword: {

        fontFamily: 'poppinsRegular',
        marginTop: 15,
        color: colorPallete.darkGrayColor
    },
    border: {
        backgroundColor: colorPallete.borderColor,
        marginTop: 12,
        width: dimensions.width / 3.8,
        height: 1,
    },
    socialAuthButton: {
        borderWidth: 1,
        borderColor: colorPallete.borderColor,
        width: 105,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        marginTop: 12,
        color: colorPallete.redColor,
        fontFamily: 'poppinsRegular',
        fontSize: 12
    }
})