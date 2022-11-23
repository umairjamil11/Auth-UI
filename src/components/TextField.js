import { StyleSheet, View, TextInput } from "react-native"
import { colorPallete, dimensions } from "../utils/constants"


const CustomTextField = ({
    placeholder,
    onChanged,
    customStyle,
    suffix,
    keyboardType,
    obsecureText = false,
    value,
    onBlur,
}) => {
    return (
        <View style={[styles.textField, customStyle]}>
            <TextInput
                value={value}
                onBlur={onBlur}
                secureTextEntry={obsecureText}
                keyboardType={keyboardType}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChanged}
                autoCapitalize='none'
            />
            {suffix}
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        width: '100%',
        height: 56,
        justifyContent: 'space-between',
        paddingLeft: 18,
        backgroundColor: colorPallete.textFieldBgColor,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colorPallete.borderColor,
        borderWidth: 1
    },
    input: {
        fontFamily: 'poppinsRegular',
        fontSize: 13,
        width: dimensions.width / 1.4,
        height: 56,
    }
})

export default CustomTextField