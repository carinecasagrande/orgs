import React from "react"
import { FlatList, StyleSheet } from "react-native"
import TextDefault from "../../../components/TextDefault"
import useFarm from "../../../hooks/useFarm"
import FarmItem from "./farmItem"

export default function farm({ header: Header }) {
    const [title, list] = useFarm()

    const listHeader = () => {
        return <>
            <Header />
            <TextDefault style={styles.listTitle}>{title}</TextDefault>
        </>
    }

    return <FlatList
        data={list}
        renderItem={({ item }) => <FarmItem {...item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={listHeader} />
}

const styles = StyleSheet.create({
    listTitle: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
        fontWeight: "bold"
    }
})