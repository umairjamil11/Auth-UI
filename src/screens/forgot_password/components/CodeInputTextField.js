import { forwardRef, useRef, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colorPallete, dimensions } from '../../../utils/constants'


const CustomCodeInputTextField = () => {
    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const [Pin, setPin] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    })

    const updatePin = (key, value) => {
        setPin({ ...Pin, [key]: value });
        console.log(Pin);
    }
    return (
        <View style={styles.container}>
            <PinPut
                ref={pin1Ref}
                style={
                    {
                        borderColor:
                            Pin.first == '' ? 'transparent' : colorPallete.primaryColor,
                        borderWidth: Pin.first == '' ? 0 : 1,
                        backgroundColor: Pin.first == '' ? colorPallete.borderColor : colorPallete.whiteColor
                    }}
                onChanged={(v) => { updatePin('first', v); }}
            />
            <PinPut
                ref={pin2Ref}
                style={
                    {
                        borderColor:
                            Pin.second == '' ? 'transparent' : colorPallete.primaryColor,
                        borderWidth: Pin.second == '' ? 0 : 1,
                        backgroundColor: Pin.second == '' ? colorPallete.borderColor : colorPallete.whiteColor
                    }
                }
                onChanged={(v) => { updatePin('second', v); }}
            />
            <PinPut
                ref={pin3Ref}
                style={
                    {
                        borderColor:
                            Pin.third == '' ? 'transparent' : colorPallete.primaryColor,
                        borderWidth: Pin.third == '' ? 0 : 1,
                        backgroundColor: Pin.third == '' ? colorPallete.borderColor : colorPallete.whiteColor
                    }
                }
                onChanged={(v) => { updatePin('third', v); }}
            />
            <PinPut
                ref={pin4Ref}
                style={
                    {
                        borderColor:
                            Pin.fourth == '' ? 'transparent' : colorPallete.primaryColor,
                        borderWidth: Pin.fourth == '' ? 0 : 1,
                        backgroundColor: Pin.fourth == '' ? colorPallete.borderColor : colorPallete.whiteColor
                    }
                }
                onChanged={(v) => { updatePin('fourth', v); }}
            />

        </View>
    )
}

export default CustomCodeInputTextField;

const PinPut = ({ ref, style, onChanged }) => {

    return <View style={[styles.inputWrapper, style]}>
        <TextInput
            keyboardType='number-pad'
            hitSlop={{ top: 12, left: 30, right: 30, bottom: 12 }}
            ref={ref}
            onChangeText={onChanged}
            style={styles.input}
            maxLength={1}
        />

    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 32,
        width: dimensions.width - 40,
        justifyContent: 'space-between'
    },
    inputWrapper: {
        width: 70,
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPallete.borderColor,
    },
    input: {
        fontSize: 22,
        fontFamily: 'poppinsSemiBold',
    }
})