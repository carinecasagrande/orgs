import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ComponentText from '../../components/ComponentText'
import ComponentHeader from '../../components/ComponentHeader'
import Details from './components/details'
import Item from './components/item'
import useTexts from '../../hooks/useTexts'

export default function BasketIndex({ details, itens, grower }) {
    const { titleBasket, titleItens } = useTexts()
    return <>
        <FlatList
            data={itens}
            renderItem={Item}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => {
                return <>
                    <ComponentHeader title={titleBasket} />
                    <View style={styles.basket}>
                        <Details {...details} grower={grower} />
                        <ComponentText style={styles.title}>{titleItens}</ComponentText>
                    </View>
                </>
            }}
            style={styles.list}
        />
    </>
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff',
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})