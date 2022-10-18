import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ComponentStar from './ComponentStar'

export default function ComponentStars({ stars: oldStars, editable = false, large = false }) {
    const [quantity, setQuantity] = useState(oldStars)

    const RenderStars = () => {
        const listStars = []
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <ComponentStar
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    fill={i < quantity}
                    large={large}
                />
            )
        }

        return listStars
    }

    return <View style={styles.starList}>
        <RenderStars />
    </View>
}

const styles = StyleSheet.create({
    starList: {
        flexDirection: 'row',
    }
})