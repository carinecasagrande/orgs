import React from 'react'
import { Dimensions, ImageBackground, Platform, StyleSheet } from 'react-native'
import headerImage from '../../../assets/basketImage.png'
import TextDefault from '../../../components/TextDefault'

export default function header({ title }) {
    return <>
        <ImageBackground source={headerImage} style={styles.header}></ImageBackground>
        <TextDefault style={styles.title}>{title}</TextDefault>
    </>
}

const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 578 / 758 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 42 : 15,
    }
})