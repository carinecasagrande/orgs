import React, { useReducer, useMemo } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import Stars from "../../../components/Stars"
import TextDefault from "../../../components/TextDefault"

const meters = (distance) => {
    return `${distance}m`
}

export default function FarmItem({ name, image, distance, stars }) {
    const [selected, invertSelected] = useReducer(
        (selected) => !selected,
        false
    )

    const distanceString = useMemo(
        () => meters(distance),
        [distance]
    )

    return <TouchableOpacity
        style={styles.card}
        onPress={invertSelected}>
        <Image source={image} style={styles.image} accessibilityLabel={name} />
        <View style={styles.details}>
            <View>
                <TextDefault style={styles.title}>{name}</TextDefault>
                <Stars stars={stars} editable={selected} large={selected} />
            </View>
            <TextDefault style={styles.distance}>{distanceString}</TextDefault>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f6f6f6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",

        // Android
        elevation: 4,

        // iOS
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    details: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    title: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
})