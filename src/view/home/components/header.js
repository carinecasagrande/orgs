import React from "react"
import { Image, StyleSheet, View } from "react-native"
import TextDefault from "../../../components/TextDefault"
import { loadHeader } from "../../../services/loadData"
import headerImage from "../../../assets/orgs.png"

class header extends React.Component {
    state = {
        header: {
            welcome: "",
            subtitle: "",
        }
    }

    updateHeader() {
        const data = loadHeader()
        this.setState({ header: data })
    }

    componentDidMount() {
        this.updateHeader()
    }

    render() {
        return <View style={styles.header}>
            <Image source={headerImage} style={styles.image} />
            <TextDefault style={styles.welcome}>{this.state.header.welcome}</TextDefault>
            <TextDefault style={styles.subtitle}>{this.state.header.subtitle}</TextDefault>
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f6f6f6",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    }
})

export default header