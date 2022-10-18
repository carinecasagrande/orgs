import React from 'react'
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import ComponentText from './ComponentText'
import Gradient from '../assets/gradient.svg'
import BasketHeader from '../assets/basketHeader.png'
import Back from '../assets/back.svg'

const width = Dimensions.get('screen').width
const patternHeight = 270

export default function Topo({ title, image = BasketHeader, height = patternHeight }) {
    const styles = stylesFunction(height)
    return <>
        <Image source={image} style={styles.header} />
        <Gradient width={width} height={130 / 360 * width} style={styles.gradient} />
        <ComponentText style={styles.title}>{title}</ComponentText>
        <TouchableOpacity
            onPress={() => { }}
            style={styles.btnBack}>
            <Back color='white' style={styles.back} />
        </TouchableOpacity>
    </>
}

const stylesFunction = (height) => StyleSheet.create({
    header: {
        width: '100%',
        height: height,
    },
    gradient: {
        position: 'absolute',
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
    btnBack: {
        position: 'absolute',
        padding: 17,
    },
    back: {
        width: 24,
        height: 24,
    },
})