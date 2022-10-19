import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ComponentText from '../../../components/ComponentText'
import logo from '../../../assets/orgs.png'
import useTexts from '../../../hooks/useTexts'

export default function Header({ bestGrowers }) {
    const { welcome, subtitle, subtitleBestGrowers } = useTexts()

    return <>
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <ComponentText style={styles.welcome}>{bestGrowers ? '' : welcome}</ComponentText>
            <ComponentText style={styles.subtitle}>{bestGrowers ? subtitleBestGrowers : subtitle}</ComponentText>
        </View>
    </>
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    logo: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    }
})