import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { colorPallete } from "../utils/constants"


const CustomRichText = ({ firstText, secondText, style, onPressed }) => {
    return (
        <TouchableOpacity style={[styles.richText, style]} onPress={onPressed}>
            <Text style={styles.firstText}>{`${firstText} `}</Text>
            <Text style={styles.secondText}>{secondText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    richText: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    firstText: {
        fontFamily: 'poppinsRegular'
    },
    secondText: {
        fontFamily: 'poppinsMedium',
        color: colorPallete.primaryColor,
    }
})

export default CustomRichText