import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import TextDefault from './TextDefault'

export default function ButtonDefault({ children, style, onpress }) {
    return <TouchableOpacity style={[style, styles.button]} onPress={onpress}>
        <TextDefault style={styles.buttonText}>
            {children}
        </TextDefault>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
})