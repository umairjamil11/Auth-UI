import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import CustomButton from '../../components/CustomAuthButton'
import { styles } from './styles/WelcomeSscreenStyles'
import AppLogo from '../../../assets/images/app_logo.svg'
import { colorPallete, Routes, statusBarHeight } from '../../utils/constants'
import { welcomeImage } from '../../utils/assets'


const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={welcomeImage} style={styles.bg}>
            <AppLogo width={58} height={58} style={{ marginBottom: 15 }} />
            <Text style={styles.appTitle}>LocalCommunity</Text>
            <CustomButton title='Login' onPressed={() => navigation.navigate(Routes.LoginScreen)} />
            <CustomButton
                title='Register'
                onPressed={() => navigation.navigate(Routes.SignUpScreen)}
                customButtonTitleStyle={{ color: 'black' }}
                customButtonStyle={{ marginTop: 12, backgroundColor: 'transparent', borderWidth: 1, marginBottom: 46 + statusBarHeight, borderColor: `${colorPallete.darkColor}80` }}
            />
        </ImageBackground>

    )
}

export default WelcomeScreen
