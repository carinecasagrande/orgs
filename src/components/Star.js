import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import star from "../assets/star.png"
import fillStar from "../assets/fillStar.png"

export default function Star({ onPress, disabled = true, fill, large = false }) {
    const styles = stylesFunction(large)

    const getImage = () => {
        if (fill) {
            return fillStar;
        }

        return star;
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={disabled}>
        <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
}

const stylesFunction = (large) => StyleSheet.create({
    star: {
        width: large ? 24 : 12,
        height: large ? 24 : 12,
        marginLeft: 3,
    }
})