import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import HomeIndex from './src/view/home'

export default function App() {
	return <SafeAreaView style={{ flex: 1 }}>
		<StatusBar />
		<HomeIndex bestGrowers={false} />
	</SafeAreaView>
}