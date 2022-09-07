import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

export default function TextDefault({ children, style }) {
    let styleDefault = styles.regular
    if (style?.fontWeight == 'bold') {
        styleDefault = styles.bold
    }

    return <Text style={[style, styleDefault]}>{children}</Text>
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: Platform.OS === 'ios' ? 'Montserrat-Regular' : 'MontserratRegular',
        // fontWeight: 'normal',
    },
    bold: {
        fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'MontserratBold',
        fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    }
})