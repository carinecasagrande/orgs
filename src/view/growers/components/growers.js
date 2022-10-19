import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ComponentText from '../../../components/ComponentText'
import useGrowers from '../../../hooks/useGrowers'
import useTexts from '../../../hooks/useTexts'
import Grower from './grower'
import Header from './header'

export default function Growers({ bestGrowers }) {
    const list = useGrowers(bestGrowers)
    const { titleGrowers } = useTexts()

    const ListHeader = () => {
        return <>
            <Header bestGrowers={bestGrowers} />
            <ComponentText style={styles.title}>{titleGrowers}</ComponentText>
        </>
    }

    return <FlatList
        data={list}
        renderItem={
            ({ item }) => <Grower {...item} onPress={() => { }} />
        }
        keyExtractor={({ id }) => id}
        ListHeaderComponent={ListHeader}
        style={styles.list} />
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
})