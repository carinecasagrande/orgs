import React from 'react'
import Header from './components/header'
import Details from './components/details'
import Item from './components/item'
import { View, StyleSheet, FlatList } from 'react-native'
import TextDefault from '../../components/TextDefault'

export default function BasketIndex({ header, details, itens }) {
    return <>
        <FlatList
            data={itens.list}
            renderItem={Item}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Header {...header} />
                    <View style={styles.basket}>
                        <Details {...details} />
                        <TextDefault style={styles.title}>{itens.title}</TextDefault>
                    </View>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 20,
        fontSize: 20,
        lineHeight: 32
    },
})

