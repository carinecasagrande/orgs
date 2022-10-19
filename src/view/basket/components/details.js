import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import ComponentText from '../../../components/ComponentText'
import useTexts from '../../../hooks/useTexts';

export default function Details({ name, grower, description, price }) {
    const { buttonBuy } = useTexts();

    return <>
        <ComponentText style={styles.name}>{name}</ComponentText>
        <View style={styles.farm}>
            <Image source={grower.imagem} style={styles.farmImage} />
            <ComponentText style={styles.farmName}>{grower.name}</ComponentText>
        </View>
        <ComponentText style={styles.description}>{description}</ComponentText>
        <ComponentText style={styles.price}>{price}</ComponentText>

        <TouchableOpacity
            style={styles.button}
            onPress={() => { }}>
            <ComponentText style={styles.buttonText}>{buttonBuy}</ComponentText>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    farmImage: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})