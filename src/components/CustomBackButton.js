import { TouchableOpacity, View } from "react-native"
import { loginStyles } from "../screens/login/styles/LoginStyles"
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const CustomBackButton = ({ onPressed, style }) => {
    return (
        <TouchableOpacity onPress={onPressed} >
            <View style={[loginStyles.backButton, style]}>
                <FontAwesome name="angle-left" size={19} />
            </View>
        </TouchableOpacity>
    )
}

export default CustomBackButton