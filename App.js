import React, { useEffect } from 'react'
import HomeIndex from './src/view/home'
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 500)
  })

  return (
    <SafeAreaView style={styles.area}>
      <HomeIndex />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
  }
})