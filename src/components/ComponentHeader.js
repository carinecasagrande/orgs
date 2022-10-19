import React from 'react'
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import ComponentText from './ComponentText'
import gradient from '../assets/gradient.png';
import headerBasket from '../assets/basketHeader.png';
import iconBack from '../assets/back.png';

const width = Dimensions.get('screen').width;
const patternHeight = 270;

export default function ComponentHeader({ title, image = headerBasket, height = patternHeight }) {
    const styles = stylesFunction(height);
    return <>
        <Image source={image} style={styles.headerBasket} />
        <Image source={gradient} style={styles.gradient} />
        <ComponentText style={styles.title}>{title}</ComponentText>
        <TouchableOpacity
            onPress={() => { }}
            style={styles.btnBack}>
            <Image source={iconBack} style={styles.back} />
        </TouchableOpacity>
    </>
}

const stylesFunction = (height) => StyleSheet.create({
    headerBasket: {
        width: "100%",
        height: height,
    },
    gradient: {
        position: 'absolute',
        width: width,
        height: 130 / 360 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
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
});