import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ComponentText from './ComponentText'

export default function ComponentButton({ children, style, onpress }) {
    return <TouchableOpacity style={[style, styles.button]} onPress={onpress}>
        <ComponentText style={styles.buttonText}>
            {children}
        </ComponentText>
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