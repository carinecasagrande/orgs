import React, { useMemo } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import ComponentStars from '../../../components/ComponentStars'
import ComponentText from '../../../components/ComponentText'

const distanceInMeters = (distance) => {
    return `${distance}m`
}

export default function Grower({ name, image, distance, stars, onPress }) {
    const textDistance = useMemo(
        () => distanceInMeters(distance),
        [distance]
    )

    return <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={image} style={styles.image} accessibilityLabel={name} />
        <View style={styles.info}>
            <View>
                <ComponentText style={styles.name}>{name}</ComponentText>
                <ComponentStars stars={stars} />
            </View>
            <ComponentText style={styles.distance}>{textDistance}</ComponentText>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        // Android
        elevation: 4,

        // iOS
        shadowColor: '#000',
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
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },
})