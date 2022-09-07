import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import ButtonDefault from '../../../components/ButtonDefault'
import TextDefault from '../../../components/TextDefault'

export default function details({ name, farmLogo, farmName, description, price, button }) {
    return <>
        {/* Nome */}
        <TextDefault style={styles.name}>
            {name}
        </TextDefault>
        {/* Fazenda */}
        <View style={styles.farm}>
            <Image source={farmLogo} style={styles.farmLogo} />
            <TextDefault style={styles.farmName}>
                {farmName}
            </TextDefault>
        </View>
        {/* Descrição */}
        <TextDefault style={styles.description}>
            {description}
        </TextDefault>
        {/* Preço */}
        <TextDefault style={styles.price}>
            {price}
        </TextDefault>
        {/* Botão */}
        <ButtonDefault style={styles.button} onpress={() => { }}>{button}</ButtonDefault>
    </>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    farmLogo: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 16
    }
})
