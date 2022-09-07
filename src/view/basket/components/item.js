import React from "react";
import { Image, StyleSheet, View } from "react-native";
import TextDefault from "../../../components/TextDefault";

export default function item({ item: { name, image } }) {
    return <View key={name} style={styles.item}>
        <Image source={image} style={styles.itemImage} />
        <TextDefault style={styles.itemName}>{name}</TextDefault>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    itemImage: {
        width: 46,
        height: 46,
    },
    itemName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
})